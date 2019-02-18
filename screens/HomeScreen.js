import React from 'react';
import {  StyleSheet, } from 'react-native';

import {Container, Content } from 'native-base';
import CardComponent from '../components/CardComponent';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    screen: HomeScreen,
    title: 'MedEarn',
  };

  render() {
    return (
      <Container style={styles.container}>
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

