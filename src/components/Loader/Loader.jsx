import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loader = () => {
    return (
        <LoaderStyled/>
    );
};

export {Loader};

    const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
    
const LoaderStyled = styled.div`
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top-color: #3498db;
    border-radius: 50%;
    animation: ${spinAnimation} 1s ease-in-out infinite;
`;


