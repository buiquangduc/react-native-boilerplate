import React from 'react'
import { connect } from 'react-redux'
import TestNavigatorScreen from './screen'

const TestNavigatorContainer = (props) => (
  <TestNavigatorScreen {...props} />
)

TestNavigatorContainer.navigationOptions = {}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(TestNavigatorContainer)
