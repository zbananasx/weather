async function time() {
  let { response, data, apiUrl } = await import("./imp.js");
  const time = data.location.localtime;
  document.getElementById("date").innerHTML = `<p>сейчас ${time}</p>`;
}
time();
