// Weather data is now fetched live in Weather.jsx
// This file only keeps the static fallback and seasonal info

export const seasonalInfo = {
  drySeasonMonths: 'November – May',
  wetSeasonMonths: 'June – October',
  typhoonRisk: 'July – September',
};

export const weatherSources = [
  {
    name: 'PAGASA Official',
    url: 'https://bagong.pagasa.dost.gov.ph',
    description: 'Philippine government weather service',
  },
  {
    name: 'AccuWeather Cebu',
    url: 'https://www.accuweather.com/en/ph/cebu-city/261604/weather-forecast/261604',
    description: 'Hourly and 15-day forecasts',
  },
  {
    name: 'Weather.com Cebu',
    url: 'https://weather.com/weather/today/l/Cebu+City+Cebu+Philippines',
    description: 'Daily conditions and radar',
  },
];
