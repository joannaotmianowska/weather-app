import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import WeatherElement from './WeatherElement';

const Wrapper = styled.div`
  background: papayawhip;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
`;

const Weather = () => {
    const [weatherData, setWeather] = useState(null);
    const [error, setError] = useState(false);

    const fetchWeatherData = useCallback(async () => {
        const key = 'eb5e1ae18e0b41b1a2f202108200209';
        const url = `https://api.weatherapi.com/v1/current.json?q=Poznan&key=${key}`;
        // const imgSrc = `https://www.weatherbit.io/static/img/icons/${icon}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            const { temp_c, condition: { icon }} = data.current;

            setWeather({
                temp: temp_c,
                iconCode: icon
            });
            console.log(data)
        } catch(error) {
            console.log(error)
            setError(true);
        }

    }, [setWeather, setError]);

    useEffect(() => {
        fetchWeatherData();
    }, [fetchWeatherData])

    if (error) {
        return 'Something wen wrong, please try again'
    };

    if (!weatherData) {
        return 'Loading...'
    };

    return (
        <Wrapper>
            <WeatherElement 
                title='Temperature' 
                content={<div>{weatherData.temp} &#8451;</div>}
            />
            <WeatherElement 
                title='Icon'
                content={<img alt='weather icon' src={weatherData.iconCode}/>}
            />
        </Wrapper>
    )
}

export default Weather;