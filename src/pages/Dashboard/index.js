import React,{ useEffect, useState, useCallback, useMemo } from 'react';

import api from '../../services/api';
import Loading from '../../components/Loading';

import { ErrorMessage } from './styles';
import Header from '../../components/Header';

const Dashboard = () =>{
    const [tasks, setTasks] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [load, setLoad] = useState(false);
    // const [concluida, setConcluida] = useState(0);
    // const [pendente, setPendente] = useState(0);

    let concluidas = 0;
    let pendentes = 0;

    // const loadTasks = async () => {
    //     try{
    //         const response = await api.get('tarefas')
    //         setTasks(response.data);
    //         setLoad(true);
    //     } catch (err){
    //         setErrorMessage(err.message);
    //         setLoad(true);
    //     }
    // }

    const loadTasks = useCallback(
        async () => {
            try{
                const response = await api.get('tarefas')
                setTasks(response.data);
                setLoad(true);
                console.log(response.data);
            } catch (err){
                setErrorMessage(err.message);
                setLoad(true);
            }
        }, []
        )   

        const qntTotalTasks = useMemo(
            () => tasks.length, [tasks]

        )

        const qntConcluedTasks = useMemo(
            () => {
                const filtered = tasks.filter(task => {
                    return task.concluido === true
                });

                return filtered.length;
            }, [tasks]
        )

        const pendingTasks = useMemo(
            () => {
                return qntTotalTasks - qntConcluedTasks;
            }, [tasks]
        )

     useEffect(() => {
       loadTasks();
    },[loadTasks])
        

        return(
            <>
              <Header title={'Resumo'}/>
              {
                !load ? <Loading /> :
                errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>
                }
                <p><b> Total de Tarefas </b> {qntTotalTasks}</p>
                <h2>Tarefas concluidas: {qntConcluedTasks}</h2>
                <h2>Pendentes: {pendingTasks === 0 ? 'Parabéns Todas as tarefas foram concluidas!' : pendingTasks}</h2>
            </>
        );
}

export default Dashboard;