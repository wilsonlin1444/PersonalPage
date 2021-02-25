import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import {HomeScreen} from "./screen/HomeScreen"

const App = () => (
  <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <HomeScreen/>
          </Route>
          <Route path="/about">
          </Route>
          <Route path="/dashboard">
          </Route>
        </Switch>
      </div>
    </Router>
)
// Populate sample pages. 
const Client= () => <h3>What is client side?<body><li>Browser</li><li>Runs on local machine</li><li>React renders user interface</li><li>React Router adds clickable links</li></body></h3>
const Server= () => <h3>What is server side?<li>node.js - JavaScript everywhere!</li></h3>

export default App;
