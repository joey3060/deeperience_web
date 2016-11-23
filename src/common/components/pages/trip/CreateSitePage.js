import React from 'react'
import { connect } from 'react-redux'
import Col from 'react-bootstrap/lib/Col'
import PageLayout from '../../layouts/PageLayout'
import PanelContainer from '../../utils/PanelContainer'
import Panel from '../../utils/Panel'
import PhaseBranch from '../../utils/PhaseBranch'
import CreateTripForm from '../../forms/trip/CreateTripForm'
import styles from '../../../styles'

const CreateTripPage = ({ page }) => {
  const nodes = [
    'trip.createTrip.title1',
    'trip.createTrip.title2',
    'trip.createTrip.title3',
    'trip.createTrip.title4',
    'trip.createTrip.title5']

  return (
    <PageLayout
      tripTabActive={1}
    >
      <PanelContainer>
        <Col md={2}>
          <Panel
            title="trip.createTrip"
            underlineStyle={{ background: styles.color.borderGrey }}
          >
            <PhaseBranch
              nodes={nodes}
              active={page}
            />
          </Panel>
        </Col>
        <Col md={7}>
          <Panel
            title={nodes[page]}
            underlineStyle={{ background: styles.color.orange,
              height: '3px' }}
            titleStyle={{ textAlign: 'left' }}
            contentDivStyle={{ padding: '20px 30px' }}
          >
            <CreateTripForm/>
          </Panel>
        </Col>
        <Col md={3}>
          <Panel
            title="trip.createTrip.help"
            isUnderline={false}
          />
          {
            page === 1 &&
            <Panel
              title="trip.createTrip.mySite"
              isUnderline={false}
            />
          }
        </Col>
      </PanelContainer>
    </PageLayout>
  )
}

export default connect(state => ({
  page: state.createTrip.page,
}))(CreateTripPage)
