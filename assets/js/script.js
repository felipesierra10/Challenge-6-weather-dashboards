var apiKey = "95cbfc717ebd8b5ee869416f67e39312"
var titleEl = document.getElementById("title")
var tempEl = document.getElementById("temp")
var windEl = document.getElementById("wind")
var humidityEl = document.getElementById("humidity")
var searchBtn = document.getElementById("search-btn")
var cityInput = document.getElementById("city-input")


function searchCity() {
    var cityName = cityInput.value

    displayWeather(cityName)
}

function displayWeather(cityName) {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=imperial"

    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (currentData) {
            console.log(currentData)
            titleEl.innerHTML = currentData.name
        })


    var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey + "&units=imperial"

    fetch(forecastUrl)
        .then(function (response) {
            return response.json()
        })
        .then(function (forcastData) {
            console.log(forcastData)
            var forecastArr = forcastData.list
            for (let i = 10; i < forecastArr.length; i = i + 8) {
                console.log(forecastArr[i])

            }
        })
}

searchBtn.addEventListener("click", searchCity)