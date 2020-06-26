import React from 'react'
import RootScreen from './screen'
import { connect } from 'react-redux'
import { turnOffAlertAct } from 'App/Stores/Alert/Actions'

const RootContainer = (props) => (
  <RootScreen {...props} />
)

const mapStateToProps = (state) => ({
  alert: state.alert
})

const mapDispatchToProps = (dispatch) => ({
  turnOffAlert: () => dispatch(turnOffAlertAct())
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
