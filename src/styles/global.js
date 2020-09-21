import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
    }

    body, html, #root{
        height: 100%;

    }

    #root{
        max-width: 700px;
    }

    body{
        background-color: #f0f0f5;
    }
`;

export default GlobalStyle;