import React, { PropTypes } from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Navigation from '../../utils/Navigation'
import ErrorList from '../../utils/ErrorList'

const PageLayout = ({ hasGrid, children, bgColor, src, subNav, ...rest }) => (
  <div
    style={{
      minHeight: '100%',
      backgroundColor: bgColor,
      backgroundImage: `url(${src})`,
      backgroundSize: 'contain',
      padding: '0',
    }}>
    <Navigation />
    {subNav}
    <ErrorList />
    {hasGrid ? (
      <Grid {...rest}>
        {children}
      </Grid>
    ) : children}
  </div>
)

PageLayout.propTypes = {
  hasGrid: PropTypes.bool,
  bgColor: PropTypes.string,
  src: PropTypes.string,
},

PageLayout.defaultProps = {
  hasGrid: true,
  bgColor: '#EFEEED',
  src: '',
}

export default PageLayout
