import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Helmet>
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout
