import React from 'react'

const DetailComponent = (props) => {
  const detail = props.detail
  console.log(detail)
  const currencyFormat = (num) => {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  return (
    <section className='content-page'>
      <div className='product'>
        <div className='content-image'>
          <div className='preview'>
            <img src={detail.picture} />
          </div>
          <div className='name'>
            <h3> {String(detail.condition).toUpperCase()}</h3>
            <h1> {detail.title}</h1>
            <h2> {currencyFormat(detail.price.amount)}</h2>
            <button>Comprar </button>
          </div>
        </div>
        <div className='description'>
          <h2>Descripción del producto</h2>
          <p> {detail.description}</p>
        </div>
      </div>

    </section>
  )
}
export const Detail = React.memo(DetailComponent)
