import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import SearchBar from './SearchBar'
const Results = React.lazy(() => import('./Results'))
const Details = React.lazy(() => import('./Details'))
const NotFoundRedirect = () => <Redirect to='/' />

const Pages = () => {
  return (
    <Suspense fallback={<div />}>
      <Router>
        <Switch>
          <Route exact path='/' component={SearchBar} />
          <Route path='/items' component={Results} />
          <Route exact path='/item/:id' component={Details} />
          <Route component={NotFoundRedirect} />
        </Switch>
      </Router>
    </Suspense>
  )
}
export default Pages
