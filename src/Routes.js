import React from 'react';
import { Switch, Route, Router} from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { DisplayInfo } from './Pages/DisplayInfo';
import history from './Components/History';

export default function Routes()
{
return(
    <Router history={history}>
        <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/ShowInformation" component={DisplayInfo} render={(props) => props}></Route>
        </Switch>
    </Router>
);
}