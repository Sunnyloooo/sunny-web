import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

// pages
import Home from '../containers/Home'
import Log from '../containers/Log'
import Blog from '../containers/blog/Blog'
import Categories from '../containers/blog/Categories'

const RootRouter = props => (
  <>
    <Router>
      <Switch>
        <Route path="/log" component={Log} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/Categories" component={Categories} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </>
)
export default RootRouter
