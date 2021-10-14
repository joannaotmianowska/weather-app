import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;

    img {
        height: 60px;
        width: 60px;
    }

    p {
        font-size: 20px;
    }
`;

const WeatherElement = ({title, content}) => {
    return (
        <Wrapper>
            <h4>{title}</h4>
            {content}
        </Wrapper>
    )
}

export default WeatherElement;