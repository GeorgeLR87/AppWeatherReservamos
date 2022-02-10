import React from 'react'
import PropTypes from 'prop-types'

const Error = ({mensaje}) => {
  return (
    <p className='text-red-500'>{mensaje}</p>
  )
}

Error.propTypes = {
    resultado: PropTypes.string.isRequired
}

export default Error
