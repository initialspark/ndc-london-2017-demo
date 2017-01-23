import $ from 'jquery';
import sunIcon from '../assets/sun.svg';
import css from '../styles/weather.css';

var weatherApp = (function () {

    "use strict";

    function getWeatherData() {
        return {
            "country": "GB",
            "temperature": 300.5,
            "weather": {
                "description": "Sunny",
                "icon": sunIcon
            },
            "location": "London"
        };
    }

    function calculateCelsius(temperature) {
        return Math.round(temperature - 273.15);
    };

    function updateView(weatherData) {

        const celsius = calculateCelsius(weatherData.temperature);

        $("#weather-icon").prop("src", weatherData.weather.icon);
        $("#current-date").html(new Date().toDateString());
        $("#location").html(weatherData.location + "," + weatherData.country);
        $("#weather-status").html(weatherData.weather.description);
        $(".num").html(celsius);
        $('body').removeClass("hide");
    };

    function init() {
        const data = getWeatherData();
        updateView(data);
    };

    return {
        start: init
    };

})();

weatherApp.start();