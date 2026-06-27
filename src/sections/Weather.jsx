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
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { currentWeather, weekForecast, seasonalInfo, weatherSources } from '../data/weather';
import styles from './Weather.module.css';

// Map icon string names → Lucide components
const WEATHER_ICONS = { Sun, Cloud, CloudSun, CloudRain, CloudDrizzle, CloudLightning };

function WeatherIcon({ name, size = 24, className = '' }) {
  const Icon = WEATHER_ICONS[name] || Cloud;
  return <Icon size={size} className={className} />;
}

function getRainClass(pct) {
  if (pct >= 70) return styles.rainHigh;
  if (pct >= 40) return styles.rainMed;
  return styles.rainLow;
}

export default function Weather() {
  return (
    <section id="weather" className={styles.section}>
      <div className="container">
        <SectionHeader
          eyebrow="Conditions"
          title="Cebu Weather"
          subtitle="Current conditions and 7-day outlook. Always check PAGASA for official forecasts."
        />

        {/* Static data notice */}
        <div className={styles.notice}>
          <Info size={15} />
          <span>
            This is static placeholder data for Version 1.{' '}
            <a href="https://bagong.pagasa.dost.gov.ph" target="_blank" rel="noopener noreferrer" className={styles.noticeLink}>
              Check PAGASA
            </a>{' '}
            for live official forecasts.
          </span>
        </div>

        {/* Current conditions */}
        <div className={styles.currentCard}>
          <div className={styles.currentMain}>
            <div className={styles.currentIconWrap}>
              <WeatherIcon name={currentWeather.conditionIcon} size={56} className={styles.currentIcon} />
            </div>
            <div>
              <p className={styles.currentLocation}>{currentWeather.location}</p>
              <p className={styles.currentTemp}>{currentWeather.tempC}°C</p>
              <p className={styles.currentCondition}>{currentWeather.condition}</p>
              <p className={styles.feelsLike}>Feels like {currentWeather.feelsLikeC}°C</p>
            </div>
          </div>

          <div className={styles.currentStats}>
            <div className={styles.stat}>
              <Droplets size={18} className={styles.statIcon} />
              <div>
                <p className={styles.statVal}>{currentWeather.humidity}%</p>
                <p className={styles.statLabel}>Humidity</p>
              </div>
            </div>
            <div className={styles.stat}>
              <CloudRain size={18} className={styles.statIcon} />
              <div>
                <p className={styles.statVal}>{currentWeather.rainChancePercent}%</p>
                <p className={styles.statLabel}>Rain chance</p>
              </div>
            </div>
            <div className={styles.stat}>
              <Wind size={18} className={styles.statIcon} />
              <div>
                <p className={styles.statVal}>{currentWeather.windKph} kph</p>
                <p className={styles.statLabel}>Wind</p>
              </div>
            </div>
            <div className={styles.stat}>
              <Thermometer size={18} className={styles.statIcon} />
              <div>
                <p className={styles.statVal}>{currentWeather.uvLabel}</p>
                <p className={styles.statLabel}>UV Index ({currentWeather.uvIndex})</p>
              </div>
            </div>
            <div className={styles.stat}>
              <Eye size={18} className={styles.statIcon} />
              <div>
                <p className={styles.statVal}>{currentWeather.visibility}</p>
                <p className={styles.statLabel}>Visibility</p>
              </div>
            </div>
          </div>
        </div>

        {/* 7-Day Forecast */}
        <h3 className={styles.forecastHeading}>7-Day Forecast</h3>
        <div className={styles.forecastRow}>
          {weekForecast.map((day) => (
            <div key={day.day} className={styles.forecastCard}>
              <p className={styles.forecastDay}>{day.day}</p>
              <WeatherIcon name={day.icon} size={28} className={styles.forecastIcon} />
              <p className={styles.forecastCondition}>{day.condition}</p>
              <div className={styles.forecastTemps}>
                <span className={styles.tempHigh}>{day.high}°</span>
                <span className={styles.tempLow}>{day.low}°</span>
              </div>
              <div className={`${styles.rainBadge} ${getRainClass(day.rain)}`}>
                {day.rain}% rain
              </div>
            </div>
          ))}
        </div>

        {/* Seasonal Info */}
        <div className={styles.seasonCard}>
          <div className={styles.seasonBadge}>{seasonalInfo.currentSeason}</div>
          <p className={styles.seasonNote}>{seasonalInfo.seasonNote}</p>
          <div className={styles.seasonGrid}>
            <div className={styles.seasonItem}>
              <span className={styles.seasonLabel}>Dry Season</span>
              <span className={styles.seasonVal}>{seasonalInfo.drySeasonMonths}</span>
            </div>
            <div className={styles.seasonItem}>
              <span className={styles.seasonLabel}>Wet Season</span>
              <span className={styles.seasonVal}>{seasonalInfo.wetSeasonMonths}</span>
            </div>
            <div className={styles.seasonItem}>
              <span className={styles.seasonLabel}>Typhoon Risk</span>
              <span className={`${styles.seasonVal} ${styles.typhoonRisk}`}>{seasonalInfo.typhoonRisk}</span>
            </div>
          </div>
        </div>

        {/* Sources */}
        <div className={styles.sources}>
          <p className={styles.sourcesLabel}>Live weather sources:</p>
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
