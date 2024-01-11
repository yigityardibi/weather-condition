import fetchWeatherData from "./api.js";
import { updateUI } from "./ui.js";


// html elemanlarını seçme
 const selectors = {
    city: document.querySelector(".weather-city"),
    datetime: document.querySelector(".weather-datetime"),
    weatherForcast: document.querySelector(".weather-forecast"),
    weatherTemperature: document.querySelector(".weather-temperature"),
    weatherIcon: document.querySelector(".weather-icon"),
    weatherMinMax: document.querySelector(".weather-minmax"),
    weatherRealfeel : document.querySelector(".weather-realfeel"),
    weatherHumidty: document.querySelector(".weather-humidity"),
    weatherWind : document.querySelector(".weather-wind"),
    searchForm: document.querySelector(".weather-search"),
    weatherPressure: document.querySelector(".weather-pressure"),
    searchInput: document.querySelector(".weather-searchForm"),
    unitsCelsiuc : document.querySelector(".weather-unit-celsius"),
    unitsFarenheit: document.querySelector(".weather-unit-farenheit")
};


//varsayılan şehir ve birim değerlerini belirledi
let currCity = "London";
let units = "metric";

export async function getWeather(){
   const data =  await fetchWeatherData(currCity,units);
   updateUI(data, selectors);
}


selectors.searchForm.addEventListener("submit", async(e) => {
   e.preventDefault();
   currCity = selectors.searchInput.value;
   // bakılacak !
   await getWeather();
    selectors.searchInput.value = "";
   
});
selectors.unitsCelsiuc.addEventListener("click", () =>{
  if (units !== "metric"){
   units="metric";
   getWeather();
  }    
});

selectors.unitsFarenheit.addEventListener("click", () => {
   if (units!== "imperial"){
      units= "imperial";
      getWeather();
   }
});

document.body.addEventListener("load", async () => {
   await getWeather();
})