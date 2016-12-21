import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Map } from 'immutable'
import Col from 'react-bootstrap/lib/Col'
import FormNames from '../../../constants/FormNames'
import PageLayout from '../../../components/layouts/PageLayout'
import PanelContainer from '../../../components/utils/PanelContainer'
import { Panel1, Panel2 } from '../../../components/utils/Panel'
import PhaseBranch from '../../../components/utils/PhaseBranch'
import CreateSiteForm from '../../../components/forms/site/CreateSiteForm'
import * as reduxFormActions from '../../../reducers/form/reduxFormActions'
import * as siteActions from '../../../reducers/site/siteActions'
import { CreateSubNav } from '../../../components/utils/SubNavigation'
import { BranchTitle } from './assets'
import styles from './styles.scss'

const actions = [
  reduxFormActions,
  siteActions,
]

const mapStateToProps = state => {
  const form = state.getIn(['form', FormNames.TRIP_CREATE_SITE])

  return {
    apiEngine: state.getIn(['global', 'apiEngine']),
    messages: state.getIn(['global', 'messages']),
    page: state.getIn(['site', 'createPage', 'page']),
    done: state.getIn(['site', 'createPage', 'done']),
    values: form ? form.get('values') : Map({}),
    subsiteActive: state.getIn(['site', 'createPage', 'subsiteActiveArr']),
    introEditorContent: state.getIn(['site', 'createPage', 'introEditorContent']),
    mainSiteEditorContent: state.getIn(['site', 'createPage', 'mainSiteEditorContent']),
  }
}

const mapDispatchToProps = dispatch => {
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject()

  return {
    actions: bindActionCreators(creators, dispatch),
  }
}

class CreateSitePage extends React.Component {
  nextPage() {
    this.props.actions.createSiteSetDone(
      this.props.done.map((value, index) => index === this.props.page ? true : value)
    )
    this.props.actions.createSiteNextPage()
  }

  previousPage() {
    this.props.actions.createSitePreviousPage()
  }

  render() {
    const {
      apiEngine,
      page,
      messages,
      done,
      values,
      subsiteActive,
      introEditorContent,
      mainSiteEditorContent,
    } = this.props

    return (
      <PageLayout subNav={<CreateSubNav activeTab={0}/>}>
        <PanelContainer>
          <Col md={2}>
            <Panel2 title="nav.trip.createSite">
              <PhaseBranch
                done={done}
                nodes={BranchTitle}
                active={page}
              />
            </Panel2>
          </Col>
          <Col md={7}>
            <Panel1
              title={BranchTitle[page]}
              underlineClass={page === 5 && styles.none}
              titleClass={page === 5 && styles.none}
            >
              <CreateSiteForm
                apiEngine={apiEngine}
                page={page}
                nextPage={::this.nextPage}
                previousPage={::this.previousPage}
                messages={messages}
                values={values}
                subsiteActive={subsiteActive}
                updateSubsiteActive={this.props.actions.createSiteSetSubsiteActive}
                updateForm={this.props.actions.change}
                introEditorContent={introEditorContent}
                updateIntroEditor={this.props.actions.createSiteUpdateIntroEditor}
                mainSiteEditorContent={mainSiteEditorContent}
                updateMainSiteEditor={this.props.actions.createSiteUpdateMainSiteEditor}
              />
            </Panel1>
          </Col>
          <Col md={3} />
        </PanelContainer>
      </PageLayout>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateSitePage)
