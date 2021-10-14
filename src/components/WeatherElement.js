import React from 'react';

const WeatherElement = ({title, content}) => {
    return (
        <div>
            <h2>{title}</h2>
            <div>{content}</div>
        </div>
    )
}

export default WeatherElement;