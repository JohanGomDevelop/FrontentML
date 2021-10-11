import React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import { useHistory } from 'react-router-dom'

import '../app.scss'

const SearchBar = () => {
  const history = useHistory()

  const handleSearch = (text) => {
    history.push('/items?search=' + text)
  }

  return (
    <Layout title='Mercado libre' description='Compre productos con Envío GRATIS y Rápido en Mercado Libre. Encuentre miles de marcas y productos a precios increíbles.'>
      <Header onKeyDown={(text) => handleSearch(text)} onChangeSearch={(text) => handleSearch(text)} />
    </Layout>
  )
}
export default SearchBar
