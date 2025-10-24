const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");

const API_KEY = "cd0009c7083d2434ebbd50ec22b86a6f";

async function getWeather() {
  const city = cityInput.value.trim();
  if (!city) {
    cityName.textContent = "⚠️ Please enter a city!";
    temperature.textContent = "";
    description.textContent = "";
    return;
  }

  try {
    cityName.textContent = "Loading...";
    temperature.textContent = "";
    description.textContent = "";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = `🌡️ ${data.main.temp}°C`;
    description.textContent = `☁️ ${data.weather[0].description}`;

  } catch (err) {
    cityName.textContent = "City not found ❌";
    console.error(err);
  }
}

getWeatherBtn.addEventListener("click", getWeather);
