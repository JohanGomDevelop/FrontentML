import React from 'react'
import { useHistory } from 'react-router-dom'

const SearchResult = (props) => {
  const list = props.list
  const history = useHistory()

  const currencyFormat = (num) => {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  const goDetails = (item) => {
    history.push('/item/' + item.id)
  }

  return (
    <section className='content-page'>
      <div className='list-product'>
        {list.map((item, index) => (
          <div className='item' key={item.id} onClick={() => goDetails(item)}>
            <img src={item.thumbnail} />
            <div className='content-item'>
              <h2>{currencyFormat(item.price)}</h2>
              <h3>{item.title}</h3>
            </div>
            <div className='content-status'>
              <h3>{item.condition}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default SearchResult
