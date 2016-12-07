import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import styles from './styles.scss'
import classNames from 'classnames'

const IconBtn = ({ name, text, onClick, bgColor, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.btn, className)}
      {...props}
    >
      <FontAwesome
        name={name}
        style={{ backgroundColor: bgColor }}
        className={styles.icon}
      />
    </button>
  )
}

IconBtn.proptypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  bgColor: PropTypes.string,
  className: PropTypes.string,
}

IconBtn.defaultProps = {
  name: '',
  onClick: () => {},
  bgColor: null,
  className: '',
}

export default IconBtn
