import react from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Components/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import CobrarPagar from './Pages/CobrarPagar';
import CompraRecarga from './Pages/CompraRecarga';
import ForgotPassword from './Pages/Forgot';

const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/CompraRecarga' component={CompraRecarga} />
                <Route path='/CobrarPagar' component={CobrarPagar} />
                <Route path='/Login' component={Login} />
                <Route path='/Signup' component={Signup} />
                <Route path='/ForgotPassword' component={ForgotPassword} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;