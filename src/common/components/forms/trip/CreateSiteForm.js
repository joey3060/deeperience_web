import React from 'react'
import { connect } from 'react-redux'
import FormNames from '../../../constants/FormNames'
import CreateSiteFormPage1 from './CreateSiteFormPage1'
import CreateSiteFormPage2 from './CreateSiteFormPage2'
import CreateSiteFormPage3 from './CreateSiteFormPage3'
import CreateSiteFormPage4 from './CreateSiteFormPage4'
import CreateSiteFormPage5 from './CreateSiteFormPage5'
import { setPage, nextPage, previousPage } from '../../../actions/createSiteActions'
import { getOptions } from '../../../utils/getI18nValue'

// http://redux-form.com/6.2.0/examples/wizard/
class CreateSiteForm extends React.Component {
  constructor() {
    super()
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
  }

  componentWillMount() {
    const { dispatch } = this.props
    dispatch(setPage(0))
  }

  nextPage() {
    const { dispatch } = this.props
    dispatch(nextPage())
  }

  previousPage() {
    const { dispatch } = this.props
    dispatch(previousPage())
  }

  render() {
    const {
      page,
      messages,
    } = this.props

    const { tripDayInfos, siteElements } = getOptions(messages.toJS(), ['TripDayInfos', 'SiteElements'])

    let values

    // debug usage
    if (this.props.createTripForm) {
      values = this.props.createTripForm.values
    }

    return (
      <div>
        <pre>{JSON.stringify(values, null, 2)}</pre>
        {page === 0 &&
        <CreateSiteFormPage1
          onSubmit={this.nextPage}
          {...this.props}
          tripDayInfos={tripDayInfos}
          siteElements={siteElements}
        />
        }
        {page === 1 &&
        <CreateSiteFormPage2
          onSubmit={this.nextPage}
          previousPage={this.previousPage}
          {...this.props}/>
        }
        {page === 2 &&
        <CreateSiteFormPage3
          onSubmit={this.nextPage}
          previousPage={this.previousPage}
          {...this.props}/>
        }
        {page === 3 &&
        <CreateSiteFormPage4
          onSubmit={this.nextPage}
          previousPage={this.previousPage}
          {...this.props}/>
        }
        {page === 4 &&
        <CreateSiteFormPage5
          {...this.props}/>
        }
      </div>
    )
  }
}

export default connect(state => ({
  apiEngine: state.apiEngine,
  page: state.createSite.page,
  createTripForm: state.form[FormNames.TRIP_CREATE_SITE],
  messages: state.intl.messages,
}))(CreateSiteForm)
