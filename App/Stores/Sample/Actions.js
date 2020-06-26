import * as types from './action-types'

export const getSampleDataAct = (data) => {
  return {
    type: types.GET_SAMPLE_DATA_REQUEST,
    payload: data
  }
}
