import React, { useEffect, useState } from 'react';

import api from '../../services/api'

import './styles.css'

const Tarefas = () =>{
    const [tarefas, setTarefas] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        api.get('/tarefas')
        .then(res => {
            setTarefas(res.data);
            setLoad(true);
        })
        .catch(err => {
            setError(err.message);
            setLoad(true);
        })
    }, [])
    if(load){
        return(
            <>
            <ul>
        {error ? <li>{error.message}</li>:tarefas.map((tarefa, index) => <li key={index}>{tarefa.descricao}</li>)}
            </ul>
            </>
        )
    }else{
        return(
        <>
            Loading...
        </>
        )
    }
}

export default Tarefas;