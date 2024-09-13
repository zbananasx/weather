const apiUrl =
  "http://api.weatherstack.com/current?access_key=37478c910aea95986b6316e8858e90ce&query=London";

async function fetchWeather() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.success === false) {
      document.getElementById("weather").innerText =
        "Error fetching weather data";
      return;
    }

    const { temperature, weather_descriptions, wind_speed, humidity } =
      data.current;
    const location = data.location.name;

    document.getElementById("weather").innerHTML = `
                    <h2>Weather in ${location}</h2>
                    <p>${weather_descriptions[0]}</p>
                    <p>Temperature: ${temperature}°C</p>
                    <p>Wind Speed: ${wind_speed} km/h</p>
                    <p>Humidity: ${humidity}%</p>
                `;
  } catch (error) {
    document.getElementById("weather").innerText =
      "Failed to load weather data.";
    console.error("Error fetching weather data: ", error);
  }
}

fetchWeather();
