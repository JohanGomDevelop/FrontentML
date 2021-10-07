import React from 'react'

const Detail = (props) => {
  const detail = props.detail
  console.log(detail)
  const currencyFormat = (num) => {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  return (
    <section className='content-page'>
      <div className='list-product' />
    </section>
  )
}
export default Detail
