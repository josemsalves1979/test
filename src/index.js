import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Novo from './Novo';
import Game from './Game';
import App from './App'
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'




// ========================================

ReactDOM.render(
    <Novo/>,
    document.getElementById('root')
);

ReactDOM.render(
    <Game/>,
    document.getElementById('root1')
);
ReactDOM.render((

    <Router history={browserHistory}>
        <Route path = "/" component = {App}>
            <IndexRoute component = {Home} />
            <Route path = "home" component = {Home} />
            <Route path = "about" component = {About} />
            <Route path = "contact" component = {Contact} />
        </Route>
    </Router>

), document.getElementById('root2'))
