import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import userAPI from '../../../api/user'
import { logoutUser } from '../../../reducers/user/userActions'

class LogoutPage extends React.Component {
  componentWillMount() {
    const { dispatch, apiEngine } = this.props

    userAPI(apiEngine)
      .logout()
      .catch((err) => {
        alert('Logout user fail')
        throw err
      })
      .then((json) => dispatch(logoutUser()))
      .then(() => dispatch(push('/')))
  }

  render() {
    return null
  }
};

export default connect(state => ({
  apiEngine: state.global.apiEngine,
}))(LogoutPage)
