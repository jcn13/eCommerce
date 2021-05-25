import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name=' description' content={description} />
      <meta name=' keywords' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome to testshop',
  description: ' We sell the best product for your wellness',
  keywords: 'wellness, naturals, local',
}

export default Meta
