import React from 'react'
import PropTypes from 'prop-types'
import { Container, Header, Text, Content, Button } from 'native-base'
import { View, ActivityIndicator, FlatList } from 'react-native'
import NavigationService from 'App/Services/NavigationService'
import styles from './styles'

const LandingScreen = ({ getSampleData, data, loading }) => {
  const _onTestNavigator = () => {
    NavigationService.navigate('TestNavigator')
  }

  const _renderSampleItem = ({ item }) => (
    <Text>{item}</Text>
  )

  return (
    <Container>
      <Header style={styles.header}>
        <Text style={styles.headerText}>React Native boilerplate</Text>
      </Header>
      <Content padder={true}>
        <View style={styles.actionButtons}>
          <View style={styles.button}>
            <Button onPress={getSampleData}>
              <Text>Test Async</Text>
            </Button>
          </View>
          <View style={styles.button}>
            <Button onPress={_onTestNavigator}>
              <Text>Test Navigator</Text>
            </Button>
          </View>
        </View>
        <View style={styles.contentContainer}>
          { loading && <ActivityIndicator />}
          <FlatList
            renderItem={_renderSampleItem}
            data={data}
          />
        </View>
      </Content>
    </Container>
  )
}

LandingScreen.propTypes = {
  getSampleData: PropTypes.func.isRequired,
  data: PropTypes.array,
  loading: PropTypes.bool,
  item: PropTypes.object
}

export default LandingScreen
