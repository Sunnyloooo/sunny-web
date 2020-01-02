import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

// pages
import Home from '../containers/Home'
import Log from '../containers/Log'

const RootRouter = props => (
  <>
    <Router>
      <Switch>
        <Route exact path="/log" component={Log} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </>
)
export default RootRouter
