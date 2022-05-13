import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import Home from './Home';
import RemoveTodo from './RemoveTodo';
import DoneTodo from './DoneTodo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddTodo from './AddTodo';
import ErrorPage from './ErrorPage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <App />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/AddTodo">
              <AddTodo />
            </Route>
            <Route path="/DeleteConfirm/:id">
              <RemoveTodo />
            </Route>
            <Route path="/DoneConfirm/:id">
              <DoneTodo />
            </Route>
            <Route path="/Error">
              <ErrorPage />
            </Route>
          </Switch>
        </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

