import { useState, useEffect } from 'react';
import {
  Sun,
  Cloud,
  CloudSun,
  CloudRain,
  CloudDrizzle,
  CloudLightning,
  Droplets,
  Wind,
  Eye,
  Thermometer,
  ExternalLink,
  Info,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { seasonalInfo, weatherSources } from '../data/weather';
import styles from './Weather.module.css';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const CEBU_LAT = 10.3157;
const CEBU_LON = 123.8854;

// Map OpenWeatherMap condition codes to Lucide icons
function getWeatherIcon(code) {
  if (code >= 200 && code < 300) return 'CloudLightning';
  if (code >= 300 && code < 400) return 'CloudDrizzle';
  if (code >= 500 && code < 600) return 'CloudRain';
  if (code >= 600 && code < 700) return 'Cloud';
  if (code === 800) return 'Sun';
  if (code > 800) return 'CloudSun';
  return 'Cloud';
}

const WEATHER_ICONS = {
  Sun, Cloud, CloudSun, CloudRain, CloudDrizzle, CloudLightning,
};

function WeatherIcon({ name, size = 24, className = '' }) {
  const Icon = WEATHER_ICONS[name] || Cloud;
  return <Icon size={size} className={className} />;
}

function getRainClass(pct) {
  if (pct >= 70) return styles.rainHigh;
  if (pct >= 40) return styles.rainMed;
  return styles.rainLow;
}

// Get season based on current month automatically
function getCurrentSeason() {
  const month = new Date().getMonth(); // 0 = January
  return month >= 5 && month <= 9 ? 'Wet Season' : 'Dry Season';
}

// Get UV label from index number
function getUVLabel(index) {
  if (index <= 2) return 'Low';
  if (index <= 5) return 'Moderate';
  if (index <= 7) return 'High';
  if (index <= 10) return 'Very High';
  return 'Extreme';
}

// Format day name from Unix timestamp
function getDayName(timestamp) {
  return new Date(timestamp * 1000).toLocaleDateString('en-PH', {
    weekday: 'short',
    timeZone: 'Asia/Manila',
  });
}

export default function Weather() {
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [uvIndex, setUvIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!API_KEY) {
      setError('No API key found. Add VITE_WEATHER_API_KEY to your environment variables.');
      setLoading(false);
      return;
    }

    async function fetchWeather() {
      try {
        // Fetch current weather
        const currentRes = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${CEBU_LAT}&lon=${CEBU_LON}&units=metric&appid=${API_KEY}`
        );

        // Fetch 5-day forecast
        const forecastRes = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${CEBU_LAT}&lon=${CEBU_LON}&units=metric&appid=${API_KEY}`
        );

        // Fetch UV index
        const uvRes = await fetch(
          `https://api.openweathermap.org/data/2.5/uvi?lat=${CEBU_LAT}&lon=${CEBU_LON}&appid=${API_KEY}`
        );

        if (!currentRes.ok || !forecastRes.ok) {
          throw new Error('Weather data unavailable. Check your API key.');
        }

        const currentData = await currentRes.json();
        const forecastData = await forecastRes.json();
        const uvData = uvRes.ok ? await uvRes.json() : null;

        // Shape current weather
        setCurrent({
          location: 'Cebu City, Philippines',
          condition: currentData.weather[0].main,
          conditionIcon: getWeatherIcon(currentData.weather[0].id),
          tempC: Math.round(currentData.main.temp),
          feelsLikeC: Math.round(currentData.main.feels_like),
          humidity: currentData.main.humidity,
          rainChancePercent: currentData.rain
            ? Math.round((currentData.rain['1h'] || 0) * 10)
            : 0,
          windKph: Math.round(currentData.wind.speed * 3.6),
          visibility:
            currentData.visibility >= 8000 ? 'Good' : 'Reduced',
          uvIndex: uvData ? Math.round(uvData.value) : null,
          uvLabel: uvData ? getUVLabel(uvData.value) : 'N/A',
        });

        // Shape 7-day forecast — OWM free tier gives 5 days
        // Take one reading per day at noon
        const dailyMap = {};
        forecastData.list.forEach((item) => {
          const day = getDayName(item.dt);
          const hour = new Date(item.dt * 1000).getHours();
          if (!dailyMap[day] || Math.abs(hour - 12) < Math.abs(
            new Date(dailyMap[day].dt * 1000).getHours() - 12
          )) {
            dailyMap[day] = item;
          }
        });

        const dailyForecast = Object.entries(dailyMap)
          .slice(0, 7)
          .map(([day, item]) => ({
            day,
            condition: item.weather[0].main,
            icon: getWeatherIcon(item.weather[0].id),
            high: Math.round(item.main.temp_max),
            low: Math.round(item.main.temp_min),
            rain: Math.round((item.pop || 0) * 100),
          }));

        setForecast(dailyForecast);
        setLoading(false);

      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchWeather();
  }, []);

  // Loading state
  if (loading) {
    return (
      <section id="weather" className={styles.section}>
        <div className="container">
          <SectionHeader
            eyebrow="Conditions"
            title="Cebu Weather"
            subtitle="Loading current conditions..."
          />
          <div className={styles.loadingState}>
            <Loader2 size={32} className={styles.spinner} />
            <p>Fetching live weather for Cebu City...</p>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error || !current) {
    return (
      <section id="weather" className={styles.section}>
        <div className="container">
          <SectionHeader
            eyebrow="Conditions"
            title="Cebu Weather"
            subtitle="Could not load live weather. Check official sources below."
          />
          <div className={styles.errorState}>
            <AlertCircle size={24} />
            <p>{error || 'Weather data unavailable right now.'}</p>
          </div>
          <div className={styles.sources}>
            <p className={styles.sourcesLabel}>Check live weather at:</p>
            <div className={styles.sourceLinks}>
              {weatherSources.map((src) => (
                <a
                  key={src.name}
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sourceLink}
                >
                  {src.name}
                  <ExternalLink size={13} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentSeason = getCurrentSeason();

  return (
    <section id="weather" className={styles.section}>
      <div className="container">
        <SectionHeader
          eyebrow="Conditions"
          title="Cebu Weather"
          subtitle="Live conditions and forecast for Cebu City, Philippines."
        />

        {/* Current conditions */}
        <div className={styles.currentCard}>
          <div className={styles.currentMain}>
            <div className={styles.currentIconWrap}>
              <WeatherIcon
                name={current.conditionIcon}
                size={56}
                className={styles.currentIcon}
              />
            </div>
            <div>
              <p className={styles.currentLocation}>{current.location}</p>
              <p className={styles.currentTemp}>{current.tempC}°C</p>
              <p className={styles.currentCondition}>{current.condition}</p>
              <p className={styles.feelsLike}>
                Feels like {current.feelsLikeC}°C
              </p>
            </div>
          </div>

          <div className={styles.currentStats}>
            <div className={styles.stat}>
              <Droplets size={18} className={styles.statIcon} />
              <div>
                <p className={styles.statVal}>{current.humidity}%</p>
                <p className={styles.statLabel}>Humidity</p>
              </div>
            </div>
            <div className={styles.stat}>
              <CloudRain size={18} className={styles.statIcon} />
              <div>
                <p className={styles.statVal}>{current.rainChancePercent}%</p>
                <p className={styles.statLabel}>Rain chance</p>
              </div>
            </div>
            <div className={styles.stat}>
              <Wind size={18} className={styles.statIcon} />
              <div>
                <p className={styles.statVal}>{current.windKph} kph</p>
                <p className={styles.statLabel}>Wind</p>
              </div>
            </div>
            {current.uvIndex !== null && (
              <div className={styles.stat}>
                <Thermometer size={18} className={styles.statIcon} />
                <div>
                  <p className={styles.statVal}>{current.uvLabel}</p>
                  <p className={styles.statLabel}>
                    UV Index ({current.uvIndex})
                  </p>
                </div>
              </div>
            )}
            <div className={styles.stat}>
              <Eye size={18} className={styles.statIcon} />
              <div>
                <p className={styles.statVal}>{current.visibility}</p>
                <p className={styles.statLabel}>Visibility</p>
              </div>
            </div>
          </div>
        </div>

        {/* Forecast */}
        {forecast.length > 0 && (
          <>
            <h3 className={styles.forecastHeading}>
              {forecast.length}-Day Forecast
            </h3>
            <div className={styles.forecastRow}>
              {forecast.map((day) => (
                <div key={day.day} className={styles.forecastCard}>
                  <p className={styles.forecastDay}>{day.day}</p>
                  <WeatherIcon
                    name={day.icon}
                    size={28}
                    className={styles.forecastIcon}
                  />
                  <p className={styles.forecastCondition}>
                    {day.condition}
                  </p>
                  <div className={styles.forecastTemps}>
                    <span className={styles.tempHigh}>{day.high}°</span>
                    <span className={styles.tempLow}>{day.low}°</span>
                  </div>
                  <div
                    className={`${styles.rainBadge} ${getRainClass(day.rain)}`}
                  >
                    {day.rain}% rain
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Seasonal Info */}
        <div className={styles.seasonCard}>
          <div className={styles.seasonBadge}>{currentSeason}</div>
          <div className={styles.seasonGrid}>
            <div className={styles.seasonItem}>
              <span className={styles.seasonLabel}>Dry Season</span>
              <span className={styles.seasonVal}>
                {seasonalInfo.drySeasonMonths}
              </span>
            </div>
            <div className={styles.seasonItem}>
              <span className={styles.seasonLabel}>Wet Season</span>
              <span className={styles.seasonVal}>
                {seasonalInfo.wetSeasonMonths}
              </span>
            </div>
            <div className={styles.seasonItem}>
              <span className={styles.seasonLabel}>Typhoon Risk</span>
              <span className={`${styles.seasonVal} ${styles.typhoonRisk}`}>
                {seasonalInfo.typhoonRisk}
              </span>
            </div>
          </div>
        </div>

        {/* Sources */}
        <div className={styles.sources}>
          <p className={styles.sourcesLabel}>Official sources:</p>
          <div className={styles.sourceLinks}>
            {weatherSources.map((src) => (
              <a
                key={src.name}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sourceLink}
              >
                {src.name}
                <ExternalLink size={13} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
