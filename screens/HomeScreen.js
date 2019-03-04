import React from 'react';
import {  StyleSheet, Text } from 'react-native';

import {Container, Content, Header,Left, Right, Body } from 'native-base';
import CardComponent from '../components/CardComponent';
import CardIcon from '../components/CardIcon';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    screen: HomeScreen,
    header: null,
  };
  constructor(props){
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
        <Header>
          <Body><Text>MedEarn</Text></Body>
        </Header>
        <Content>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
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
    }
  }
);

