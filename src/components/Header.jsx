import React, { useState, useEffect } from 'react'

const Header = () => {
  const [searchText, setSearchText] = useState('')
  const handleSearch = (text) => {
    setSearchText(text)
  }

  return (
    <div className='header'>
      <div className='content-header'>
        <a className='logo' />
        <form className='form-search'>
          <input type='text' className='search-input' placeholder='Nunca dejes de buscar' onChange={(e) => handleSearch(e.target.value)} />
          <button type='button' className='search-button' />
        </form>
      </div>
    </div>
  )
}
export default Header
