import React, { useState } from 'react'
import axios from 'axios'

import './style.scss'


const key = `1165983d9a07fefe4ae8dba3f37a842e`

const Api = () => {
    const getWeather = (busqueda) => {
        const res = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${busqueda}&appid=${key}&units=metric`)
            .then(res => callback(res))
            .catch(err => console.log(err))
    }

    const callback = (res) => {

        console.log(res)
        //Guardamos el nombre de la ciudad que el usuario busca
        let cityName = res.data.name
        console.log(cityName)

        //Guardamos el clima de la ciudad que el usuario busca
        let weather = res.data.weather[0].description
        console.log(weather)
        //Temperatura maxima y minima y actual

        let tempActual = res.data.main.temp
        console.log(tempActual)
        let tempMax = res.data.main.temp_max
        console.log(tempMax)
        let tempMin = res.data.main.temp_min
        console.log(tempMin)

        return `${cityName} ${weather} ${tempActual} ${tempMax} ${tempMin}`
    }
    const [city, setCity] = useState({});


    const search = (h) => {
        h.preventDefault();
    }

    getWeather('London')

    return (
        <>
            <main>
                <header className="header-content">
                    <h1>Weather App</h1>
                </header>

                <form className="form-content">
                    <input type="text" name="city" placeholder="City" onChange={e => setCity(e.target.value)} />
                    <input onSubmit={search} type="submit" value="Search" />
                </form>

                <section className="weather-content">
                    <h2>{cityName}</h2>
                </section>
            </main>
        </>
    )
}

export default Api
