import React, { useState } from 'react'

const Header = (props) => {
  const [searchText, setSearchText] = useState('')

  const handleSearch = (text) => {
    setSearchText(text)
  }

  const handleClick = () => {
    props.onChangeSearch(searchText)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('handleKeyDown')
      props.onKeyDown(searchText)
    }
  }

  return (
    <div className='header'>
      <div className='content-header'>
        <a className='logo' href='/' />
        <form className='form-search' onSubmit={e => { e.preventDefault() }}>
          <input type='text' className='search-input' placeholder='Nunca dejes de buscar' onKeyDown={handleKeyDown} onChange={(e) => handleSearch(e.target.value)} autoComplete='true' />
          <button type='button' className='search-button' onClick={handleClick} />
        </form>
      </div>
    </div>
  )
}
export default Header
