import { OPENWEATHER_API_KEY } from "./apikey.js";

const weather = {
    apiKey: OPENWEATHER_API_KEY,
    city: null,

    fetchWeather() {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + this.city
            + "&units=metric&lang=fr&appid="
            + this.apiKey
        )
        .then(response => response.json())
        .then(data => this.displayWeather(data))
        .catch(err => console.error("Erreur lors de la récupération météo :", err));
    },

    displayWeather(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        // Nettoyer le nom de la ville
        let cityName = name.replace(/Arrondissement de /gi, "").trim();
        document.querySelector(".city").innerText = "Météo à " + cityName;
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        console.log(description);
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidité : " + humidity + "%";
        document.querySelector(".wind").innerText = "Vent : " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
    },

    startAutoRefresh() {
        setInterval(() => this.fetchWeather(), 3600000); // MàJ une fois par heure (3600000 ms)
    }
};

// Charger la ville depuis conf.json
fetch("./conf.json")
  .then(r => r.json())
  .then(conf => {
      weather.city = conf.city;
      weather.fetchWeather();
      weather.startAutoRefresh();
  });
