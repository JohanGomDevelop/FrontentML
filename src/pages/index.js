import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import SearchBar from './SearchBar'
import Results from './Results'
import Details from './Details'
const Pages = () => {
  return (
    <Router>
      <Route exact path='/' component={SearchBar} />
      <Route path='/items' component={Results} />
      <Route exact path='/item/:id' component={Details} />
    </Router>
  )
}
export default Pages
