import React, { useState, useEffect } from 'react'
import SearchResult from '../components/SearchResult'
import Header from '../components/Header'
import BreadCrumbs from '../components/BreadCrumbs'
import queryString from 'query-string'
import { useHistory } from 'react-router-dom'
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '../../config/config.json')[env]

const Results = (props) => {
  const [list, setList] = useState([])
  const [breadcrumb, setBreadcrumb] = useState([])
  const params = queryString.parse(props.location.search)
  const search = params.search
  console.log(params, search)
  const history = useHistory()
  const getBreadcrumb = (array) => {
    const breadcrumb = []
    for (let index = 0; index < array.length; index++) {
      const element = array[index]
      breadcrumb.push(element)
    }
    setBreadcrumb(breadcrumb)
  }

  const handleSearch = (text) => {
    history.push('/items?search=' + text)
    const url = config.urlSearch + '?q=' + text
    /* global fetch:false */
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setList(data.items)
        getBreadcrumb(data.categories)
      })
  }

  useEffect(() => {
    if (search !== undefined) { handleSearch(search) }
  }, [])

  return (
    <div>
      <Header onChangeSearch={(text) => handleSearch(text)} />
      <BreadCrumbs list={breadcrumb} />
      <SearchResult list={list} />
    </div>
  )
}
export default Results
