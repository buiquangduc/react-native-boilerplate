import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistReducer, persistStore } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'

import AsyncStorage from '@react-native-community/async-storage'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  /**
   * Blacklist state that we do not need/want to persist
   */
  blacklist: [
    'sample',
    'alert'
  ]
}

export default (rootReducer, rootSaga) => {
  const middleware = []
  const enhancers = []

  // Connect the sagas to the redux store
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  enhancers.push(applyMiddleware(...middleware))

  // Redux persist
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = createStore(persistedReducer, composeWithDevTools(...enhancers))
  const persistor = persistStore(store)

  // Kick off the root saga
  sagaMiddleware.run(rootSaga)

  return { store, persistor }
}
