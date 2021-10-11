import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Detail from '../components/Detail'
import { useHistory } from 'react-router-dom'
import BreadCrumbs from '../components/BreadCrumbs'
import Layout from '../components/Layout'
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '../../config/config.json')[env]
const Details = (props) => {
  const [detail, setDetail] = useState(null)
  const [category, setCategory] = useState('')
  const [breadcrumb, setBreadcrumb] = useState([])
  const id = props.match.params.id
  const history = useHistory()

  const handleSearch = (text) => {
    history.push('/items?search=' + text)
  }
  const currencyFormat = (num) => {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  const getById = (id) => {
    /* global fetch:false */
    id = String(id).replace('%E2%80%8B', '')
    const url = config.urlGetItem + id
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setDetail(data.item)
        setBreadcrumb(data.categories)
        if (data.categories.length > 0) { setCategory(data.categories[0]) }
      })
  }

  useEffect(() => {
    if (id !== undefined) { getById(id) }
  }, [])

  return (
    <Layout title={detail !== null ? `${detail.title} | MercadoLibre.com.co` : 'MercadoLibre.com.co'} description={detail !== null ? 'Cómpralo en Mercado Libre a ' + currencyFormat(detail.price.amount) + ' Paga en cuotas - Envío a nivel nacional. Encuentra más ' + category + '.' : ' '}>
      <Header onChangeSearch={(text) => handleSearch(text)} onKeyDown={(text) => handleSearch(text)} />
      <BreadCrumbs list={breadcrumb} />
      {detail !== null && <Detail detail={detail} />}
    </Layout>
  )
}
export default Details
