import React, { useState, useEffect } from 'react'

const Header = (props) => {
  const [searchText, setSearchText] = useState(props.textSearch !== undefined ? props.textSearch : '')

  const handleSearch = (text) => {
    setSearchText(text)
  }

  const handleClick = () => {
    if (searchText !== '') { props.onChangeSearch(searchText) }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (searchText !== '') { props.onKeyDown(searchText) }
    }
  }

  useEffect(() => {
    console.log('props.textSearch', props.textSearch)
    setSearchText(props.textSearch !== undefined ? props.textSearch : '')
  }, [])

  return (
    <div className='header'>
      <div className='content-header'>
        <a className='logo' href='/' />
        <form className='form-search' onSubmit={e => { e.preventDefault() }}>
          <input type='text' className='search-input' placeholder='Nunca dejes de buscar' value={searchText} onKeyDown={handleKeyDown} onChange={(e) => handleSearch(e.target.value)} autoComplete='true' />
          <button type='button' className='search-button' onClick={handleClick} />
        </form>
      </div>
    </div>
  )
}
export default Header
