import React, { Component } from 'react'

// eslint-disable-next-line no-unused-vars
import './app.scss'

import SearchResult from './components/SearchResult'

export class App extends Component {
  render () {
    return (
      <div className='App'>
        <SearchResult />
      </div>
    )
  }
}
