import React from 'react'
import { connect } from 'react-redux'
import Grid from 'react-bootstrap/lib/Grid'
import Alert from 'react-bootstrap/lib/Alert'
import Table from 'react-bootstrap/lib/Table'
import { removeError } from '../../reducers/error/errorActions'
import isString from '../../utils/isString'

const mapStateToProps = (state) => {
  return {
    errors: state.get('errors'),
  }
}

function renderMetaContent(metaContent) {
  if (isString(metaContent)) {
    return metaContent
  }

  return (
    <pre>
      {JSON.stringify(metaContent, null, 2)}
    </pre>
  )
}

function renderMeta(meta) {
  if (isString(meta)) {
    return (
      <p>
        {meta}
      </p>
    )
  }

  return (
    <Table
      condensed
      responsive
      style={{
        marginBottom: 0,
        background: 'white',
      }}
    >
      <tbody>
        {Object.keys(meta).map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>
              {renderMetaContent(meta[key])}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

const ErrorList = ({ errors, dispatch }) => (
  <Grid>
    {errors.map((error, index) => (
      <Alert
        key={index}
        bsStyle="danger"
        onDismiss={() => dispatch(removeError(error.id))}
      >
        <h4>{error.title}</h4>
        {` ${error.detail}`}
        {error.meta && renderMeta(error.meta)}
      </Alert>
    ))}
  </Grid>
)

export default connect(mapStateToProps)(ErrorList)
