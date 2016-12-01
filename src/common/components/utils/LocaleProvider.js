import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Map } from 'immutable'
import { IntlProvider } from 'react-intl'
import * as globalActions from '../../reducers/global/globalActions'

const actions = [globalActions]

const mapStateToProps = state => {
  return {
    locale: state.global.locale,
    messages: state.global.messages,
  }
}

const mapDispatchToProps = dispatch => {
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject()

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch,
  }
}

class LocaleProvider extends Component {
  componentDidMount() {
    const { locale } = this.props
    const lang = locale || navigator.language
    this.props.actions.updateLocale(lang)
      .then(() => {
        console.log('load locale (automatically) ok')
      }, (err) => {
        alert('load locale (automatically) fail', err)
      })
  }

  render() {
    const { children, locale, messages } = this.props
    // hacky code don't know why intl didn't transfer to normal object
    // and is still an immutable object
    let message
    if (messages.toJS) message = messages.toJS()
    else message = messages

    return (
      <IntlProvider locale={locale} messages={message}>
        {children}
      </IntlProvider>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LocaleProvider)
