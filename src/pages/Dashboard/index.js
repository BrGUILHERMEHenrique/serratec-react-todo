import React,{ useEffect, useState } from 'react';

import api from '../../services/api';
import Loading from '../../components/Loading';

import { Container } from './styles';


const Dashboard = () =>{
    const [tarefas, setTarefas] = useState([]);
    const [error, setError] = useState('');
    const [load, setLoad] = useState(false);

    let contadorFalse = 0;
    let contadorTrue = 0;

    useEffect(() => {
        api.get('tarefas')
        .then(res => {
            setTarefas(res.data);
            setLoad(true);
        })
        .catch(err => {
            setError(err.message)
            setLoad(true);
        })
    },[])
    if(load){
        tarefas.map(tarefa => {
            tarefa.concluido ? contadorTrue++ : contadorFalse++;
        })
        return(
            <Container >
                {error? <h1>{error}</h1> : null}
                <h1>Tarefas concluidas: {contadorTrue === tarefas.length ? "Parabéns todas as tarefas foram concluidas!" : contadorTrue}</h1>
                <h1>Tarefas não concluidas: {contadorFalse}</h1>
            </Container>
        );
    }else{
        return( 
            <Loading />
        )
    }

}

export default Dashboard;