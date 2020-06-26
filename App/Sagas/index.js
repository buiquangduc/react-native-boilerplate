import { all, fork } from 'redux-saga/effects'
import * as Sample from './SampleSaga'

export default function * root() {
  yield all([
    ...Object.values(Sample)
  ].map(fork))
}
