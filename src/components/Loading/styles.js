import styled, { keyframes } from 'styled-components'

const spin = keyframes`
to {
    transform: rotate(360deg);
}
`;

export const LoadingAnimation = styled.div`
    border: 8px solid rgba(0, 0, 0, 0.1);
    border-left-color: #22a6b3;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spin} 1s linear infinite;
`;