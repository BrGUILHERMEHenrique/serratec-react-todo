import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Tarefas from '../pages/tarefas';
import Login from '../pages/Login';

const Routes = () => (
    //switch aqui tá garantindo que somente um component(page) vai ser mostrada
    <Switch>

        <Route exact path="/" component={Login}/>
        
        <Route path="/dashboard" component={Dashboard} />

        <Route path="/tarefas" component={Tarefas} />


    </Switch>
)

export default Routes;