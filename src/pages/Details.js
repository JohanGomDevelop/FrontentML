import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Detail from '../components/Detail'
import { useHistory } from 'react-router-dom'
import BreadCrumbs from '../components/BreadCrumbs'
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '../../config/config.json')[env]
const Details = (props) => {
  const [detail, setDetail] = useState(null)
  const [breadcrumb, setBreadcrumb] = useState([])
  const id = props.match.params.id
  const history = useHistory()
  const handleSearch = (text) => {
    history.push('/items?search=' + text)
  }

  const getById = (id) => {
    /* global fetch:false */
    id = String(id).replace('%E2%80%8B', '')
    console.log('id', id)
    const url = config.urlGetItem + id
    console.log('url', url)
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setDetail(data.item)
        setBreadcrumb(data.categories)
        console.log(data.categories)
      })
  }

  useEffect(() => {
    if (id !== undefined) { getById(id) }
  }, [])

  return (
    <div>
      <Header onChangeSearch={(text) => handleSearch(text)} />
      <BreadCrumbs list={breadcrumb} />
      {detail !== null && <Detail detail={detail} />}
    </div>
  )
}
export default Details
