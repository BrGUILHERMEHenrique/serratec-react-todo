import styled from 'styled-components';

const Container = styled.div`
width: 100vw;
background-color: ${props => props.ativo?'#f0f0f5':'#000'};
color: white;
`;

export default Container;