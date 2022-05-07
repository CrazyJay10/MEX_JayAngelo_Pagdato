import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './stylesheet/apptitle.css';
import './stylesheet/todo.css';
import './stylesheet/global.css';
import App from './App';
import Login from './Login';
import Title from './Title';
import Error from './Error';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const DATA = [
  { id: "todo-0", name: "Eat", completed: true, priority: true },
  { id: "todo-1", name: "Sleep", completed: false, priority: true },
  { id: "todo-2", name: "Repeat", completed: false, priority: false }
];

ReactDOM.render(
  <React.StrictMode>
    <Title />
    <Router>
    <div className="content">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/todo">
          <App tasks={DATA} />
        </Route>
        <Route path="/error">
          <Error />
        </Route>
      </Switch>
    </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
