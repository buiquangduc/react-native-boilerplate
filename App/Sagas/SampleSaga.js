import { put, call, takeLatest } from 'redux-saga/effects'
import * as types from 'App/Stores/Sample/action-types'
import * as alertTypes from 'App/Stores/Alert/action-types'
import SampleService from 'App/Services/SampleService'

function * updateSampleData() {
  try {
    yield put({ type: types.UPDATE_SAMPLE_DATA_LOADING, payload: true })

    const data = yield call(SampleService.getSampleData)

    yield put({ type: types.UPDATE_SAMPLE_DATA, payload: data })
    yield put({ type: types.UPDATE_SAMPLE_DATA_LOADING, payload: false })
    yield put({ type: alertTypes.TURN_ON_ALERT, payload: 'Get sample data successfully.' })
  } catch (err) {
    yield put({ type: types.UPDATE_SAMPLE_DATA_LOADING, payload: false })
  }
}

export function * watchUpdateAgeRange() {
  yield takeLatest(types.GET_SAMPLE_DATA_REQUEST, updateSampleData)
}
