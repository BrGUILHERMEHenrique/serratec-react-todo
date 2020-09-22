import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Title } from './styles'

import logoImg from '../../assets/logo.png';


const Header = ({ title }) => {
    return (
        <>
        <Container>
        <img src={ logoImg } alt="Logo Todo" />

            <ul>
                <li>
                    <Link to='/dashboard'>
                        DashBoard
                    </Link>
                </li>
                <li>
                    <Link to='/tarefas'>
                        Tarefas
                    </Link>
                </li>
            </ul>
            </Container>
            <Title>{title}</Title>
            </>
    )
}

export default Header;