import { INITIAL_STATE } from './InitialState'
import * as types from './action-types'

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.UPDATE_SAMPLE_DATA:
      return {
        ...state,
        data: action.payload
      }
    case types.UPDATE_SAMPLE_DATA_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state
  }
}
