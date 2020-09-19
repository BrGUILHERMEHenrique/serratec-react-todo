import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Tarefas from '../pages/tarefas'

const Routes = () => (
    <Switch>

        <Route exact path="/" />
        
        <Route path="/dashboard" component={Dashboard} />

        <Route path="/tarefas" component={Tarefas} />


    </Switch>
)

export default Routes;