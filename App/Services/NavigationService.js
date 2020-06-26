import { NavigationActions, StackActions, DrawerActions } from 'react-navigation'

/**
 * The navigation is implemented as a service so that it can be used outside of components, for example in sagas.
 *
 * @see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
 */

let navigator

/**
 * This function is called when the RootScreen is created to set the navigator instance to use.
 */
function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef
}

/**
 * Call this function when you want to navigate to a specific route.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in RootScreen using createStackNavigator()
 * @param params Route parameters.
 */
function navigate(routeName, params, key) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
      key
    })
  )
}

function push(routeName, params, key) {
  navigator.dispatch(
    StackActions.push({
      routeName,
      params,
      key
    })
  )
}

function goBack() {
  navigator.dispatch(NavigationActions.back())
}

function openDrawer() {
  navigator.dispatch(DrawerActions.openDrawer())
}

function closeDrawer() {
  navigator.dispatch(DrawerActions.closeDrawer())
}

/**
 * Call this function when you want to navigate to a specific route AND reset the navigation history.
 *
 * That means the user cannot go back. This is useful for example to redirect from a splashscreen to
 * the main screen: the user should not be able to go back to the splashscreen.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in RootScreen using createStackNavigator()
 * @param params Route parameters.
 */
function navigateAndReset(routeName, params) {
  navigator.dispatch(
    StackActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({
          routeName,
          params
        })
      ]
    })
  )
}

export default {
  navigate,
  navigateAndReset,
  setTopLevelNavigator,
  goBack,
  closeDrawer,
  openDrawer,
  push
}
