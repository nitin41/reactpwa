import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './logo.svg';
import Shell from './todolist';
import Img from './image';
import './App.css';

const Page = ({ title }) => (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{title}</h2>
      </div>
      <p className="App-intro">
        This is the {title} page.
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/new-todo">Todo</Link>
      </p>
      <p>
        <Link to="/image">Image</Link>
      </p>
      <p>
        <Link to="/settings">Settings</Link>
      </p>

    </div>
);

const Home = (props) => (
  <Page title="Home"/>
);

const About = (props) => (
  <Page title="About"/>
);

const NewTodo = (props) => (
  <Shell title="NewTodo"/>
);

const Image = (props) => (
  <Img title="Image"/>
);

const Settings = (props) => (
  <Page title="Settings"/>
);



class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/new-todo" component={NewTodo}/>
        <Route path="/image" component={Image}/>
        <Route path="/settings" component={Settings}/>
      </Router>
    );
  }
}

export default App;
