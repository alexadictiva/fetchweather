/*==========================================
TIPOS DE FETCH:

-Then anidado dentro de otro then
fetch(url, headers).then((response) => {
  response.json().then((data) => console.log(data.list));
});

-function flecha
fetch(url, headers)
  .then((response) => response.json())
  .then((data) => console.log(data));

-function con return
fetch(url, headers)
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data));


============================================*/

let inputUser = document.querySelector("#input-user").value;
let countryName = document.querySelector(".country-name");
let weather = document.querySelector(".weather");
let currentTemp = document.querySelector(".current-temp");
let feelsLike = document.querySelector(".feels-like");
let minTemp = document.querySelector(".min-temp");
let maxTemp = document.querySelector(".max-temp");
let responseApi = document.querySelector(".response-api");

const city = inputUser;
const url = `https://community-open-weather-map.p.rapidapi.com/find?q=${city}&units=metric`;
const headers = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    "x-rapidapi-key": "ba9d450c5emshcd20840efdf0dd8p1460f2jsn14b4da0d0478",
  },
};

fetch(url, headers)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.list);
    /*
    console.log("Ciudad: " + data.list[0].name);
    console.log("Temperatura Actual: " + data.list[0].main.temp);
    console.log("Sensación Térmica: " + data.list[0].main.feels_like);
    console.log("Temperatura Mínima: " + data.list[0].main.temp_min);
    console.log("Temperatura Máxima: " + data.list[0].main.temp_max);
    */
    countryName.innerHTML = data.list[0].name;
    currentTemp.innerHTML = data.list[0].main.temp + "°C";
    weather.innerHTML =
      "Clima actual: " +
      data.list[0].weather[0].main +
      " / " +
      data.list[0].weather[1].main +
      " / " +
      data.list[0].weather[2].main;
    feelsLike.innerHTML = "Sensación Térmica: " + data.list[0].main.feels_like;
    minTemp.innerHTML = "Temperatura Mínima: " + data.list[0].main.temp_min;
    maxTemp.innerHTML = "Temperatura Máxima: " + data.list[0].main.temp_max;
  })
  .catch((err) => console.error("Error: " + err));

let nombresito = document
  .createElement("h2")
  .setAttribute("class", "country-name");
let body = document.querySelector("body");
body.appendChild("nombresito");
