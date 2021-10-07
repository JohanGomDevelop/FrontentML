import React, { useState, useEffect } from 'react'
import SearchResult from '../components/SearchResult'
import Header from '../components/Header'
import BreadCrumbs from '../components/BreadCrumbs'
import queryString from 'query-string'
import { useHistory } from 'react-router-dom'
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
      const element = array[index].category_id
      breadcrumb.push(element)
    }
    setBreadcrumb(breadcrumb)
  }

  const handleSearch = (text) => {
    history.push('/items?search=' + text)
    /* global fetch:false */
    fetch('https://api.mercadolibre.com/sites/MLA/search?total=4&limit=4&q=' + text)
      .then(response => response.json())
      .then(data => {
        setList(data.results)
        getBreadcrumb(data.results)
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
