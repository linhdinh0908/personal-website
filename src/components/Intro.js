import React from 'react'
import styled from 'styled-components';

const Introduction = styled.p`
    font-size: 20px;
    font-style: italic;
`;

function Intro() {
    return (
        <div className = "intro-container">
            <Introduction>I'm very interested in React and ThreeJS. Looking for a full-time opportunities in web development. Hobbies include playing guitar and reading</Introduction>    
        </div>
    )
}

export default Intro
