import styled from 'styled-components';
import {
    shade
} from 'polished';

export const Container = styled.div `

display:flex;
justify-content: space-between;
align-items: baseline;
margin-bottom: 40px;


ul{
    display: flex;
    list-style: none;

    li {
        font-size: 14px;


        & + li {
            margin-left: 15px;

        }

        a {
            color: #333;
            text-decoration: none;

            &:hover {
                color: #04d361;
            }
        }

    }
}

`;
export const Title = styled.h1 `
    font-size: 36px;
    color: #3a3a3a;
`;

export const Form = styled.form `

    margin-top: 25px;
    max-width: 700px;
    display: flexbox;


    input{
        flex: 1;
        height: 50px;
        padding: 0 25px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;


        &::placeholder{
            color: #a8a8b3;
        }
    }

    button{
        width: 120px;
        height: 50px;
        background: #04d361;
        border: 0;
        border-radius: 0 5px 5px 0;
        color: #fff;
        transition: background-color 0.3s;

        &:hover{
            background: ${shade(0.2, '#04d361')}
        }
    }
`;

