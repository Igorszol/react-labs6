import React from 'react'

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PageEmployeeList from './PageEmployeesList';
import PageEmployee from './PageEmployee';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <PageEmployeeList></PageEmployeeList>
        <Link to="/new">
          <button>
          Create new employee
          </button>
          </Link>
      </Route>
      <Route path="/new">
        <PageEmployee></PageEmployee>
      </Route>
    </Switch>
  </Router>
)

export default App