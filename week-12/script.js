fetch("https://api.weather.gov/gridpoints/TOP/31,80/forecast")
  .then(response => response.json())
  .then(data => {
    var allWeather = data.properties.periods; 
    const container = document.querySelector('.container');
    
    allWeather.forEach(weather => {
      const forecastElement = document.createElement('div');
      forecastElement.className = 'forecast';
      forecastElement.innerHTML = `
        <div class="forecast-info">
          <h2>${weather.name}</h2>
          <p>Temperature: ${weather.temperature} °F</p>
          <p>Wind Speed: ${weather.windSpeed}</p>
          <p>Short Forecast: ${weather.shortForecast}</p>
        </div>`;
      
      const circleColor = getCircleColor(weather.shortForecast);
      const circleElement = createCircleElement(circleColor);
      forecastElement.appendChild(circleElement);
      
      container.appendChild(forecastElement);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

function getCircleColor(shortForecast) {
  switch (shortForecast.toLowerCase()) {
    case 'sunny':
      return 'yellow';
    case 'partly cloudy':
      return '#bcbfc4';
    case 'mostly cloudy':
      return '#6e7178';
      case 'mostly cloudy then chance rain and snow showers':
      return '#6e7178';
      case 'chance rain and snow showers then mostly cloudy':
      return '#aabae6';
      case 'slight chance rain showers':
      return '#aae6e6';
      case 'chance showers and thunderstorms':
      return '#a3adad';
    case 'chance showers and thunderstorms then mostly sunny':
      return '#edd191';
      case 'mostly sunny then slight chance rain showers':
      return '#e6bf32';
      case 'mostly sunny':
      return '#e6b74c';
     
    default:
      return 'white';
  }
}

function createCircleElement(color) {
  const circleElement = document.createElement('div');
  circleElement.className = 'circle';
  circleElement.style.backgroundColor = color;
  return circleElement;
}