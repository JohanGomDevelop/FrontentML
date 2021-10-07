import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import BreadCrumbs from '../components/BreadCrumbs'
import Detail from '../components/Detail'

import { useHistory } from 'react-router-dom'
const Details = (props) => {
  const [detail, setDetail] = useState(null)
  const [breadcrumb, setBreadcrumb] = useState([])
  const id = props.match.params.id
  console.log('id', id)
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
  }

  const getById = (id) => {
    /* global fetch:false */
    fetch('https://api.mercadolibre.com/items/​' + id + '/description')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.status === 200) { setDetail(data.results) }
        // getBreadcrumb(data.results)
      })
  }

  useEffect(() => {
    if (id !== undefined) { getById(id) }
  }, [])

  return (
    <div>
      <Header onChangeSearch={(text) => handleSearch(text)} />
      {/* <BreadCrumbs list={breadcrumb} /> */}
      {detail !== null && <Detail detail={detail} />}
    </div>
  )
}
export default Details
