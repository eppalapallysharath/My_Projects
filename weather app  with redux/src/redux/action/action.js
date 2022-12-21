import axios from "axios"

export const cityWeatherInfo = (data) => {
    return{
        type : "CITY_WEATHER_INFO",
        payload: data
    }
}


export const featchWeather = (city) => {
    console.log("actions")
  return async dispatch => {
    const apiKey = "629c364a5f79414eb95104907220610";
    await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`)
    .then((response)=>{
        let w = response.data
      dispatch(cityWeatherInfo(w))}
    )
  }
}

