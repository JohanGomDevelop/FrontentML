import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import SearchBar from './SearchBar'
import Results from './Results'
import Details from './Details'
const NotFoundRedirect = () => <Redirect to='/' />

const Pages = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SearchBar} />
        <Route path='/items' component={Results} />
        <Route exact path='/item/:id' component={Details} />
        <Route component={NotFoundRedirect} />
      </Switch>
    </Router>
  )
}
export default Pages
