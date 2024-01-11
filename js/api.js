const API_KEY = "7f988b5ee32b85908ab2cdfafa818aff";



async function fetchWeatherData(city, units) {
    try{
        const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
    );
        
      //eğer istek başarılı değilse hata fırlat
       if(!response.ok){
        throw new Error("İstek başarılı değil");
       }
       // api den gelen yanıtı json formatına dönüştürür ve geri dönderir
       return response.json();
    }  catch(error) {
       console.log(error);
    }
    
}

export default fetchWeatherData;
