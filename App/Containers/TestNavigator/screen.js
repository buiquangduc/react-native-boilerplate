import React from 'react'
import { Container, Header, Text, Content, Button } from 'native-base'
import NavigationService from 'App/Services/NavigationService'
import styles from './styles'

const TestNavigatorScreen = () => {
  const _onGoBack = () => {
    NavigationService.goBack()
  }

  return (
    <Container>
      <Header style={styles.header}>
        <Text style={styles.headerText}>React Native boilerplate</Text>
      </Header>
      <Content padder={true}>
        <Button onPress={_onGoBack}>
          <Text>Back to previous screen</Text>
        </Button>
      </Content>
    </Container>
  )
}

TestNavigatorScreen.propTypes = {}

export default TestNavigatorScreen
