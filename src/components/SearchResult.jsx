import React, { useState, useEffect } from 'react'

const Header = () => {
  const [searchText, setSearchText] = useState('')
  const [list, setList] = useState([])
  const handleSearch = (text) => {
    setSearchText(text)
  }

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + searchText)
      .then(response => response.json())
      .then(data => setList(data.results))
  }, [])

  return (
    <div className='content'>
      <div className='header'>
        <div className='content-header'>
          <a className='logo' />
          <form className='form-search'>
            <input type='text' className='search-input' placeholder='Nunca dejes de buscar' onChange={(e) => handleSearch(e.target.value)} />
            <button type='button' className='search-button' />
          </form>
        </div>
      </div>
    </div>
  )
}
export default Header
