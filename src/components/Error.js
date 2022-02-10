import React from 'react'
import PropTypes from 'prop-types'

const Error = ({mensaje}) => {
  return (
    <div className='flex justify-center '>
      <p className='text-red-500 font-medium text-l border-2 border-red-500 rounded-full bg-red-100 text-center pt-2 align-middle w-1/2 h-12 opacity-80  '>{mensaje}
      </p>
    </div>
  )
  
}

Error.propTypes = {
    resultado: PropTypes.string.isRequired
}

export default Error
