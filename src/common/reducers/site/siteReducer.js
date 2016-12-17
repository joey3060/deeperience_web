import Immutable from 'immutable'

const {
  CREATE_SITE_ERROR,
  CREATE_SITE_NEXT_PAGE,
  CREATE_SITE_PREVIOUS_PAGE,
  CREATE_SITE_SET_PAGE,
} = require('../../constants/ActionTypes').default

const initialState = Immutable.fromJS({
  createPage: {
    page: 2,
    done: new Array(...{ length: 6 }).map(() => false),
  },
  error: '',
})

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SITE_ERROR:
      return state.set('error', action.payload)

    case CREATE_SITE_NEXT_PAGE:
      return state.setIn(['createPage', 'page'], state.getIn(['createPage', 'page']) + 1)

    case CREATE_SITE_PREVIOUS_PAGE:
      return state.setIn(['createPage', 'page'], state.getIn(['createPage', 'page']) - 1)

    case CREATE_SITE_SET_PAGE:
      return state.setIn(['createPage', 'page'], action.payload.page)

    default:
      return state
  }
}
