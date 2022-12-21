import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { featchWeather } from '../redux/action/action'

export const WeatherApp = () => {
    let[cityName, setCityName] = useState('')

    const state = useSelector(state => state.weatherInfo)
    const dispatch = useDispatch()

    // const handleChange = (event) => {
    //     setCityName(event.target.value)
    // }

    const handleSubmit = () => {
        dispatch(featchWeather(cityName))
        setCityName("")
        // console.log(cityName)
    }

  return (
    <div style={{textAlign:'center', marginTop:'30px'}}>
        <form>
            <input type = "text" 
            value={cityName} 
            // onChange={handleChange}
            onChange={(e)=>setCityName(e.target.value)}
            />
            &nbsp;
            <input type = 'button' value = "Submit" 
            onClick={handleSubmit} />
        </form>
        <div>
            {
                <>
                {state !== '' ? (
                <div>
                <p>{`${state.location.name}, ${state.location.region}, ${state.location.country}`}</p>
                <p><b>Temperature:</b> {state.current.temp_c}<sup>o</sup>C</p>
                <p><b>Condition:</b> {state.current.condition.text}</p>
                </div>
            ) : null}
                </>
            }
            {/* {console.log(state)} */}
        </div>
    </div>
  )
}
