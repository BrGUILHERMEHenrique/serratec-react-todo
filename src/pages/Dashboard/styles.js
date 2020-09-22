import styled from 'styled-components';

export const Container = styled.div`
width: 100vw;
background-color: ${props => props.ativo?'#f0f0f5':'#000'};
color: white;
`;

export const ErrorMessage = styled.span `

display:block;
color: #c53030;
margin-top: 10px;

`;

