import React from 'react';
import {BrowserRouter as Router,Route,NavLink,Switch} from 'react-router-dom';
import './App.css';
import Home from './containers/Home/';
import Cinema from './containers/Cinema/';
import Me from './containers/Me/';
function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                    <Route path="/"  exact component={Home}/>
                    <Route path="/cinema" component={Cinema}/>
                    <Route path="/me" component={Me}/>
            </Switch>
            <div>
                <ul className="menu">
                    <li>
                        <NavLink exact to="/" activeClassName="active">首页</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cinema" activeClassName="active">影院</NavLink>
                    </li>
                    <li>
                        <NavLink to="/me" activeClassName="active">我的</NavLink>
                    </li>
                </ul>
            </div>
        </Router>
    </div>
  );
}

export default App;
