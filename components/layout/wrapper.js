import React from 'react'
import PropTypes from 'prop-types'
import stylesheet from './wrapper.scss'

const wrapper = ({ children, isLight = false, isWhite = false, isMain = false }) => {
  const modifiers = 
    isLight && 'Wrapper--is-light' || 
    isWhite && 'Wrapper--is-white' ||
    isMain && 'Wrapper--is-main' || ''
  return (
    <div className={`Wrapper ${modifiers} row`}>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      { children }
    </div>
  )
}

wrapper.defaultProps = {
  isLight: false,
  isWhite: false,
  isMain: false
}

wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isLight: PropTypes.bool,
  isWhite: PropTypes.bool,
  isMain: PropTypes.bool
}

export default wrapper;