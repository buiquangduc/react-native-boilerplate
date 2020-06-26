import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Toast from 'react-native-root-toast'
import { View } from 'react-native'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import styles from './styles'

const RootScreen = ({ alert, turnOffAlert }) => {
  useEffect(() => {
    if (alert.visible) {
      setTimeout(() => {
        turnOffAlert()
      }, 5000)
    }
  }, [alert])

  return (
    <View style={styles.container}>
      <Toast
        visible={alert.visible}
        position={50}
      >
        {alert.message}
      </Toast>
      <AppNavigator
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef)
        }}
      />
    </View>
  )
}

RootScreen.propTypes = {
  alert: PropTypes.object,
  turnOffAlert: PropTypes.func.isRequired
}

export default RootScreen
