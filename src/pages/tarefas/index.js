import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Loading from '../../components/Loading';
import { Title, Form, ErrorMessage, Tasks, Header } from './styles';
import { FiCircle, FiCheckCircle, FiDelete } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';



import api from '../../services/api';


const Tarefas = () =>{
    const [tasks, setTasks] = useState([]);
    const [load, setLoad] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [newTask, setNewTask] = useState('');

    const loadTasks = async ()=>{
        try{
            const response = await api.get('tarefas');
            setTasks(response.data);
            setLoad(true);
            console.log('GetALl: ', response.data );
        } catch(err){
            setErrorMessage(err.message);
            setLoad(true);
        }
    }
    useEffect(() => {
       loadTasks();
    }, [])

        
    async function handleAddTask(e){
        setLoad(false);
        e.preventDefault();
        console.log('form-submit: ', newTask);
        if(!newTask) {setErrorMessage("adicione a tarefa a ser salva"); setLoad(true); return};
        const params = {
            descricao: newTask,
            concluido: false
        }

        try {
            await api.post('tarefas', params);
            setLoad(true);
            loadTasks();
            setNewTask('');
            setErrorMessage('');
        } catch (err) {
            setErrorMessage(err.message);
            setLoad(true);
            setNewTask('');
        }
    }

    const handleTask = async (task) => {
        const params = {
            ...task,
            concluido: !task.concluido
        }
        try{
            await api.put(`tarefas/${task.id}`, params);
            
        }catch (err){
            setErrorMessage(err.message);
        
        }

        loadTasks();
    }

    const removeTask = async (task) => {
        await api.delete(`tarefas/${task.id}`);

        loadTasks();
    }

        return(
            <>
            <Header>
            <img src={ logoImg } alt="Logo Todo" />

            <ul>
                <li>
                    <Link to='/dashboad'>
                        DashBoard
                    </Link>
                </li>
                <li>
                    <Link to='/tarefas'>
                        Tarefas
                    </Link>
                </li>
            </ul>
            </Header>
            <Title>Tarefas</Title>
                <Form onSubmit={handleAddTask}>
                    <input onChange={e => setNewTask(e.target.value)} value={newTask} type="text" placeholder="Digite a nova tarefa"/>
                    <button type="submit">Criar</button>
                </Form>
                {
                !load ? <Loading />:
                errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>
                }
                {
                    tasks.map((task) => //verifica e mostra na tela todas as tarefas
                <Tasks>
                <div key={task.id }>
                        <strong>{task.descricao}</strong>
                      
                        <span>
                        {
                            task.concluido ? (
                                <>
                                <FiDelete size={22} onClick={() => removeTask(task)} style={{marginRight: 10}}/>
                                <FiCheckCircle size={22} onClick={() => handleTask(task)} />
                                </>
                            ) :
                            (
                                <FiCircle size={22} onClick={() => handleTask(task)} />
                            )
                        }

                        </span>
                    </div>
                </Tasks>
                )
                }
                
            </>
        )
 
}

export default Tarefas;