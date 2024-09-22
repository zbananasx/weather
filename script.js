const weather = document.getElementById("weather");
async function fetchWeather() {
  let { response, data, apiUrl } = await import("./imp.js");
  const {
    current: {
      temperature,
      wind_speed,
      pressure,
      humidity,
      feelslike,
      visibility,
    },
  } = data;
  const location = data.location.name;
  const time = data.location.localtime;
  weather.innerHTML = `
          <h1>погода в ${location}</h1>
          <p>температура ${temperature} c</p> 
          <p>ощущается как ${feelslike} c</p>
          <p>хз че это ${humidity}</p>
          <p>контрспел в тайп соуле ${pressure}</p>
          <p>ветер ${wind_speed} в секунду</p>
          <p>видимость ваще ${visibility}</p>
`;
  if (time >= 6 <= 22) {
    document.body.className = "day";
  }
  document.className = "night";
  console.log(time);
}
fetchWeather();
