import React, { useState } from 'react'

const Header = (props) => {
  const [searchText, setSearchText] = useState('')

  const handleSearch = (text) => {
    setSearchText(text)
  }

  const handleClick = () => {
    props.onChangeSearch(searchText)
  }

  return (
    <div className='header'>
      <div className='content-header'>
        <a className='logo' href='/' />
        <form className='form-search'>
          <input type='text' className='search-input' placeholder='Nunca dejes de buscar' onChange={(e) => handleSearch(e.target.value)} />
          <button type='button' className='search-button' onClick={handleClick} />
        </form>
      </div>
    </div>
  )
}
export default Header
