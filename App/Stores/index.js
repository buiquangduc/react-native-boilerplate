import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import SampleReducer from './Sample/Reducers'
import AlertReducer from './Alert/Reducers'

const rootReducer = combineReducers({
  sample: SampleReducer,
  alert: AlertReducer
})

export const { store, persistor } = configureStore(rootReducer, rootSaga)
