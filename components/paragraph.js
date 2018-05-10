import React from 'react'
import stylesheet from './paragraph.scss'
import PropTypes from 'prop-types'


export const Paragraph = ({ contents }) => {
  return (
    <div className="Paragraph">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <p className="Paragraph__text">
        {contents}
      </p>
    </div>
  )
}

Paragraph.propTypes = {
  contents: PropTypes.string.isRequired
}
