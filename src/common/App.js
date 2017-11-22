import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../App.css';
import { DashboardPage } from '../pages/DashboardPage';
import { WorkflowsPage } from '../pages/WorkflowsPage';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/admin/workflows' component={WorkflowsPage} />
            <Route path='/' component={DashboardPage} />
        </Switch>
    </BrowserRouter>
);

export default App;
