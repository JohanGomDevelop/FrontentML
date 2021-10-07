import React from 'react'
import Header from '../components/Header'
import { useHistory } from 'react-router-dom'
import '../app.scss'
const SearchBar = () => {
  const history = useHistory()

  const handleSearch = (text) => {
    history.push('/items?search=' + text)
  }

  return (
    <div>
      <Header onChangeSearch={(text) => handleSearch(text)} />
    </div>
  )
}
export default SearchBar
