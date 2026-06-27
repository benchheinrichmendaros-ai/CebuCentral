// ── Static weather data for Version 1 ──
// To upgrade: replace this with a live call to PAGASA API or OpenWeatherMap.
// The component is structured to accept the same data shape from an API response.

export const currentWeather = {
  location: 'Cebu City, Philippines',
  note: 'This is static data. Connect to PAGASA or OpenWeatherMap to display live conditions.',
  condition: 'Partly Cloudy',
  conditionIcon: 'CloudSun',
  tempC: 30,
  feelsLikeC: 34,
  humidity: 72,
  rainChancePercent: 25,
  windKph: 14,
  uvIndex: 8,
  uvLabel: 'Very High',
  visibility: 'Good',
};

export const weekForecast = [
  { day: 'Mon', condition: 'Sunny', icon: 'Sun', high: 33, low: 25, rain: 10 },
  { day: 'Tue', condition: 'Partly Cloudy', icon: 'CloudSun', high: 31, low: 25, rain: 20 },
  { day: 'Wed', condition: 'Showers', icon: 'CloudRain', high: 29, low: 24, rain: 75 },
  { day: 'Thu', condition: 'Scattered Rain', icon: 'CloudDrizzle', high: 28, low: 23, rain: 60 },
  { day: 'Fri', condition: 'Cloudy', icon: 'Cloud', high: 30, low: 24, rain: 30 },
  { day: 'Sat', condition: 'Sunny', icon: 'Sun', high: 33, low: 26, rain: 10 },
  { day: 'Sun', condition: 'Partly Cloudy', icon: 'CloudSun', high: 32, low: 25, rain: 20 },
];

export const seasonalInfo = {
  currentSeason: 'Wet Season',
  seasonNote:
    'June–October is wet season in Cebu. Expect afternoon showers, increased humidity, and typhoon risk July–September. Always check PAGASA advisories before travel.',
  drySeasonMonths: 'November – May',
  wetSeasonMonths: 'June – October',
  typhoonRisk: 'July – September',
};

export const weatherSources = [
  { name: 'PAGASA Official', url: 'https://bagong.pagasa.dost.gov.ph', description: 'Philippine government weather service' },
  { name: 'AccuWeather Cebu', url: 'https://www.accuweather.com/en/ph/cebu-city/261604/weather-forecast/261604', description: 'Hourly and 15-day forecasts' },
  { name: 'Weather.com Cebu', url: 'https://weather.com/weather/today/l/Cebu+City+Cebu+Philippines', description: 'Daily conditions and radar' },
];
