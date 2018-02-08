import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import { Route, NavLink, HashRouter} from "react-router-dom";
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Home from './Home'
import About from './About'
import Contact from './Contact'

class App extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li>Contact</li>
                </ul>
                {this.props.children}
            </div>
            /*<HashRouter>
                <div>
                    <h1>Simple SPA</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/stuff">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/stuff" component={About}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                </div>
            </HashRouter>*/
        );
    }
}

export default App;