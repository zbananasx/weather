const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?id=509820&appid=e0b8f3093a6daff663193a0ec6178f1c";

async function гадания() {
  let izo = document.getElementById(изотерика);
  try {
    let response = await fetch(apiUrl);
    let data = await response.json();
    if (data.success == false) {
      izo.innerText = "error fetching weather data";
      return;
    }
    const date = data.current.date; // день
    if (date % 2 === 0) {
      izo.innerText = "сегодня отсосалово";
    } else {
      izo.innerText = "сегодня без отсосалова";
    }
  } catch (error) {
    izo.innerText = "короче ошибка во времени(конкретный эррор)";
    console.error("не получилось :(): ", error);
  }
}
