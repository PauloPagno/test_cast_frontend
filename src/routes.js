import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Curso from './pages/Curso'
import NovoCurso from './NovoCurso';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/curso" component={Curso}/>
                <Route path="/curso/novo" component={NovoCurso}/>
            </Switch>
        </BrowserRouter>
    );

}
