import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LandingContainer from 'App/Containers/Landing/container'
import TestNavigatorContainer from 'App/Containers/TestNavigator/container'

const StackNavigator = createStackNavigator(
  {
    Landing: LandingContainer,
    TestNavigator: TestNavigatorContainer
  },
  {
    initialRouteName: 'Landing'
  }
)

export default createAppContainer(StackNavigator)
