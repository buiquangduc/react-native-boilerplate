import React from 'react'
import { connect } from 'react-redux'
import LandingScreen from './screen'
import { getSampleDataAct } from 'App/Stores/Sample/Actions'

const LandingContainer = (props) => (
  <LandingScreen {...props} />
)

LandingContainer.navigationOptions = {
  headerShown: false
}

const mapStateToProps = (state) => ({
  data: state.sample.data,
  loading: state.sample.loading
})

const mapDispatchToProps = (dispatch) => ({
  getSampleData: () => dispatch(getSampleDataAct())
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer)
