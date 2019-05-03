import React from 'react';
import { StyleSheet, Text, StatusBar } from 'react-native';

import { Container, Content, Header, Left, Right, Body, Title } from 'native-base';
import CardComponent from '../components/CardComponent';
import CardIcon from '../components/CardIcon';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'MedEarn',
    headerVisible: true,
  };
  constructor(props) {
    super(props);
    this.state = {
      source: null,
      error: false,
      temperature: 0,
      weather: '',
      location: '',
    };
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header
          style={{ backgroundColor: 'white' }}
          androidStatusBarColor="white">
          <StatusBar
            backgroundColor="white"
            barStyle="dark-content" />
          <Body>
            <Title style={styles.title}>MedEarn</Title>
          </Body>
        </Header>
        <Content>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    title: {
      flex: 1,
      fontFamily: 'Sweet-Sensations-Persona-Use', 
      fontSize: 30,
      color: '#242424',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
);

