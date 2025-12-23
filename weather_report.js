// weather_report.js

document.addEventListener("DOMContentLoaded", function () {
  const weatherForm = document.getElementById("weatherForm");
  const cityInput = document.getElementById("city");
  const weatherInfo = document.getElementById("weatherInfo");

  const apiKey = "c4f86ece00bc8aa272652ac9065af12d"; // Your OpenWeather API key

  function showWeatherDetails(event) {
    event.preventDefault();

    const city = cityInput.value.trim();

    if (city === "") {
      weatherInfo.innerHTML = "<p class='error'>Please enter a city name.</p>";
      return;
    }

    weatherInfo.innerHTML = "<p class='loading'>Fetching weather data...</p>";

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then((data) => {
        weatherInfo.innerHTML = `
          <div class="weather-card">
            <h2>${data.name}, ${data.sys.country}</h2>
            <p class="temp">${Math.round(data.main.temp)}°C</p>
            <p class="desc">${data.weather[0].description}</p>
            <p class="details">Humidity: ${data.main.humidity}%</p>
            <p class="details">Wind: ${data.wind.speed} m/s</p>
          </div>
        `;
      })
      .catch(() => {
        weatherInfo.innerHTML =
          "<p class='error'>Unable to retrieve weather data. Please check the city name.</p>";
      });
  }

  weatherForm.addEventListener("submit", showWeatherDetails);
});
