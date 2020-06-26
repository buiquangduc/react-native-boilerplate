import * as types from './action-types'

export const turnOffAlertAct = () => {
  return {
    type: types.TURN_OFF_ALERT
  }
}

export const showAlertAct = (message) => {
  return {
    type: types.TURN_ON_ALERT,
    payload: message
  }
}
