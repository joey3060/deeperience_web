import React, { PropTypes } from 'react'
import Checkbox from '../bases/Checkbox'

const BsCheckbox = ({ input, ...rest }) => (
  <div className="checkbox">
    <Checkbox
      input={input}
      {...rest}
    />
  </div>
)

BsCheckbox.propTypes = {
  input: PropTypes.object.isRequired,
}

export default BsCheckbox
