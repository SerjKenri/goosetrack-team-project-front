import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loader = () => {
  return (
    <Backdrop>
      <LoaderStyled />
    </Backdrop>
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


export const Backdrop = styled.div(({color})=>({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor:color ? color : 'rgba(0, 0, 0, 0.2)',
    opacity: 1,
    transform: 'scale(1)',
    display: 'flex',
    justifyContent: 'center',
  alignItems: 'center',
    zIndex: 1
}));

