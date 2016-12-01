import InitialState from './apiEngineInitialState'
import { SET_API_ENGINE } from '../../constants/ActionTypes'

const initialState = new InitialState()

export default (state = initialState, action) => {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state)

  switch (action.type) {
    case SET_API_ENGINE:
      return action.apiEngine

    default:
      return state
  }
}
