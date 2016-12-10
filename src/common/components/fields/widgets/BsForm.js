import React, { PropTypes, Component } from 'react'
import Form from 'react-bootstrap/lib/Form'

class BsForm extends Component {
  getChildContext() {
    const {
      defaultHorizontal,
      defaultLabelDimensions,
      defaultFieldDimensions,
      defaultShowLabel,
    } = this.props

    return {
      defaultHorizontal,
      defaultLabelDimensions,
      defaultFieldDimensions,
      defaultShowLabel,
    }
  }

  render() {
    const {
      /* eslint-disable */
      // consume props owned by BsForm
      defaultHorizontal,
      defaultLabelDimensions,
      defaultFieldDimensions,
      defaultShowLabel,
      /* eslint-enable */
      children,
      ...rest
    } = this.props

    return (
      <Form horizontal={defaultHorizontal} {...rest}>
        {children}
      </Form>
    )
  }
};

BsForm.propTypes = {
  defaultHorizontal: PropTypes.bool,
  defaultLabelDimensions: PropTypes.object,
  defaultFieldDimensions: PropTypes.object,
  defaultShowLabel: PropTypes.bool,
}

BsForm.childContextTypes = {
  defaultHorizontal: PropTypes.bool,
  defaultLabelDimensions: PropTypes.object,
  defaultFieldDimensions: PropTypes.object,
  defaultShowLabel: PropTypes.bool,
}

BsForm.defaultProps = {
  defaultHorizontal: true,
  defaultLabelDimensions: {
    sm: 2,
  },
  defaultFieldDimensions: {
    sm: 10,
  },
  defaultShowLabel: true,
}

export default BsForm
