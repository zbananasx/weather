const izo = document.getElementById("kroks");
async function гадания() {
  let { response, data, apiUrl } = await import("./imp.js");
  const time = data.location.localtime;
  if (time % 2 === 0) {
    izo.innerText = "сегодня отсосалово";
  } else {
    izo.innerText = "сегодня без отсосалова";
  }
  console.log(time);
}
гадания();
