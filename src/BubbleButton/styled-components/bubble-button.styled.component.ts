import styled, { keyframes } from 'styled-components';

const shakeAnimation = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-5px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(5px);
  }
`;

interface ButtonProps {
    lightColor?: string;
    darkColor?: string;
}

export const Button = styled.button<ButtonProps>`
    position: absolute;
    z-index: 100;
    width: 60px;
    height: 60px;
    bottom: 30px !important;
    right: 20px !important;
    background-image: linear-gradient(to right, ${props => props.darkColor}, ${props => props.lightColor}) !important;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 9999px !important;
    margin-left: 0.75rem/* 12px */ !important;
    padding: 0.5rem/* 8px */ !important;
    border: 0 !important;
    animation: ${shakeAnimation} 0.7s 1;
    @media (min-width: 700px) {
        right: 60px !important;
        bottom: 40px !important;
    }
    @media (min-width: 1200px) {
        bottom: 80px !important;
        right: 100px !important;
    }
`;