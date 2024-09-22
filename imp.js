export const apiUrl =
  "http://api.weatherstack.com/current?access_key=8d76bdb10dc1a0e3a186d1a0d0d9ba67";
export let response = await fetch(`${apiUrl}&query=petrozavodsk`);
export let data = await response.json();
