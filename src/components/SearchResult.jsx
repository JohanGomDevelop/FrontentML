import React, { useState } from 'react'
import Header from './Header'

const SearchResult = () => {
  const [list, setList] = useState([])
  const [searchText, setSearchText] = useState('')
  const [breadcrumb, setBreadcrumb] = useState([])
  const getBreadcrumb = (array) => {
    const breadcrumb = []
    for (let index = 0; index < array.length; index++) {
      const element = array[index].category_id
      breadcrumb.push(element)
    }
    setBreadcrumb(breadcrumb)
  }

  const handleSearch = (text) => {
    setSearchText(text)
    /* global fetch:false */
    console.log('searchText', text)
    fetch('https://api.mercadolibre.com/sites/MLA/search?total=4&limit=4&q=' + text)
      .then(response => response.json())
      .then(data => {
        setList(data.results)
        getBreadcrumb(data.results)
      })
  }

  return (
    <div className='content-page'>
      <Header onChangeSearch={(text) => handleSearch(text)} />
      <section className='breadcrumb'>
        <ul>
          {breadcrumb.map((name) => (
            // eslint-disable-next-line react/jsx-key
            <li>{name}</li>
          ))}

        </ul>
      </section>
      <div className='list-product'>
        {list.map((item, index) => (
          <div className='item' key={item.id}>
            <img src={item.thumbnail} />
            <div className='content-item'>
              <h2>{'$' + item.price}</h2>
              <h3>{item.title}</h3>
            </div>
            <div className='content-status'>
              <h3>{item.condition}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default SearchResult
