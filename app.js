//https://api.openweathermap.org/data/2.5/weather?q=sydney&units=metric&appid=18399336824890995076c4ef962da64a

//REQUEST SCRIPT

//open weather map API key - created on www.openweathermap.org
const apiKey = '18399336824890995076c4ef962da64a';

//unit conversion to metic system
const uConvert = 'metric';

const cityWeather = async (city) =>{
    const openMap = 'https://api.openweathermap.org/data/2.5/weather';
    const queryData = `?q=${city}&appid=${apiKey}&units=${uConvert}`;

    const getData = await fetch(openMap+queryData)
    const data = await getData.json();
    return data;
}

//DOM MANIPULATION SCRIPT

// const searchBar = document.querySelector(".search-bar").innerText = "Weather in" + `${city}`;

const searchBar = document.querySelector(".search");

const cityValue = document.querySelector(".search input");

const clickButton = document.querySelector(".click-button");

const cityName = document.querySelector(".city-name");

const cardWeather = document.querySelector(".weather-card");




const updateCard = (city)=>{

const emoji = city.weather[0].icon;

const emojiSrc = `https://openweathermap.org/img/wn/${emoji}.png`

    // console.log(city);
cityName.textContent = 'Weather in' +' '+ city.name;

cardWeather.innerHTML = `<div class="weather-card">
<h2 class="city-name">Weather in ${city.name}</h2>
<h1 class="temp"> ${city.main.temp}°C</h1>
<img src="${emojiSrc}" alt="" class="icon">
<div class="description">${city.weather[0].description}</div>
<div class="humidity">Humidity: ${city.main.humidity}%</div>
<div class="wind">Wind Speed: ${city.wind.speed}km/h</div>
</div>`

}


//event listener for "enter"
searchBar.addEventListener('submit', (event) => {
    event.preventDefault();
    const userInput = cityValue.value.trim();
    console.log(userInput);
 // search bar reset after each city search
    searchBar.reset();

    cityWeather(userInput)
    .then((data) => {
        updateCard(data);
    })
    .catch((error) => {console.log(error)});

});


//event listener for "click"
clickButton.addEventListener('click', function() {
    const userInput = cityValue.value.trim();
    console.log(userInput);
    // search bar after each city serach
    searchBar.reset();   

cityWeather(userInput)
.then((data) => {
    updateCard(data);
})
.catch((error) => {console.log(error)})
});










/* //TEST FOR OPEN WEATHER MAP DATA RETRIVAL
//const openMapFull = https://api.openweathermap.org/data/2.5/weather?q=sydney&units=metric&appid=18399336824890995076c4ef962da64a
//NB: the data is in json, test city: sydney, unit: metric
fetch(openMapFull)
.then(Response => Response.json())
.then(data => console.log(data))
//use the catch function to detect error in the data query
.catch((error) => {console.log(error)}); */
