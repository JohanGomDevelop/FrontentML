import React, { useState, useEffect } from 'react'
import SearchResult from '../components/SearchResult'
import Header from '../components/Header'
import BreadCrumbs from '../components/BreadCrumbs'
import queryString from 'query-string'
import { useHistory } from 'react-router-dom'
import Layout from '../components/Layout'
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '../../config/config.json')[env]

const Results = (props) => {
  const [list, setList] = useState([])
  const [textSearch, setTextSearch] = useState('')
  const [loaded, setLoaded] = useState(false)
  const [breadcrumb, setBreadcrumb] = useState([])
  const history = useHistory()
  const handleSearch = (text, enrute) => {
    const url = config.urlSearch + '?q=' + text
    if (enrute) {
      console.log('replace url')
      history.push('/items?search=' + text)
    }
    /* global fetch:false */
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setList(data.items)
        const length = data.categories.length > 3 ? 3 : data.categories
        const list = []
        for (let index = 0; index < length; index++) {
          const element = data.categories[index]
          list.push(element)
        }
        setBreadcrumb(list)
      })
  }

  useEffect(() => {
    console.log('useEffect url')
    const params = queryString.parse(props.location.search)
    const search = params.search
    console.log('useEffect url', search)
    if (search !== undefined) {
      setTextSearch(search)
      handleSearch(search, false)
    }
    setLoaded(true)
  }, [])

  return (
    <Layout title={`${textSearch} | MercadoLibre.com.co`} description={`Encuentra ${textSearch} en MercadoLibre.com.co! Entre y conozca nuestras increíbles ofertas y promociones. Descubre la mejor forma de comprar online`}>
      {loaded && <Header textSearch={textSearch} onChangeSearch={(text) => handleSearch(text, true)} onKeyDown={(text) => handleSearch(text, true)} />}
      <BreadCrumbs list={breadcrumb} />
      {list.length > 0 && <SearchResult list={list} />}
    </Layout>
  )
}
export default Results
