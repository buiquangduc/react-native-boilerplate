import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import EStyleSheet from 'react-native-extended-stylesheet'
import { store, persistor } from 'App/Stores'
import RootContainer from './Containers/Root/container'
import { Metrics } from './Theme'

EStyleSheet.build({
  $rem: Metrics.REM,
})

const App = () => (
  <SafeAreaProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootContainer />
      </PersistGate>
    </Provider>
  </SafeAreaProvider>
)

export default App
