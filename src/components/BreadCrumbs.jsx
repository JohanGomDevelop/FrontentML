import React from 'react'

const BreadCrumbs = (props) => {
  const list = props.list
  return (
    <section>
      <div className='breadcrumb'>
        <ul className='content'>
          {list.map((name, index) => (
          // eslint-disable-next-line react/jsx-key
            <li className='keyword' key={index + String(name).substring(0, 5)}>{name + '  >  '}</li>
          ))}

        </ul>
      </div>
    </section>
  )
}

export default BreadCrumbs
