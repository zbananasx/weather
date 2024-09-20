const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?id=509820&appid=e0b8f3093a6daff663193a0ec6178f1c";

async function fetchWeather() {
  let weather = document.getElementById("weather");
  try {
    let response = await fetch(apiUrl);
    let data = await response.json();
    if (data.success == false) {
      weather.innerText = "error fetching weather data";
      return;
    }
    const {
      temperature,
      feels_like,
      humidity,
      pressure,
      wind,
      clouds,
      visibility,
      precipitation,
      weather,
      lastupdate,
      dt,
      name,
    } = data.current;
    const time = data.current.dt;
    const location = data.city.name;
    weather.innerHTML = `
          <h2>Weather in ${location}</h2>
          <p>temperature${temperature}c</p> 
          <p>feels like${feels_like}c</p>
          <p>хз че это${humidity}</p>
          <p>контрспел в тайп соуле${pressure}</p>
          <p>ветер ${temperature}в секунду</p>
          <p>облака ${clouds}</p>
          <p>видимость ваще ${visibility}</p>
`;
  } catch (error) {
    weather.innerText = "короче ошибка в загрузке(конкретный эррор)";
    console.error("Error fetching weather data: ", error);
  }
  if (time >= 6 <= 22) {
    body.classList.add("day");
  }
  body.classList.add("night");
}
fetchWeather();
