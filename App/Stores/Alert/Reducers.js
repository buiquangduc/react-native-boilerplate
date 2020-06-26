import { INITIAL_STATE } from './InitialState'
import * as types from './action-types'

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.TURN_ON_ALERT:
      return {
        visible: true,
        message: action.payload
      }
    case types.TURN_OFF_ALERT:
      return {
        visible: false,
        message: ''
      }
    default:
      return state
  }
}
