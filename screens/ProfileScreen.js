import React from 'react';
import {Icon, Container, Content, Body, Left, Right, Button, Header } from 'native-base';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import CardIcon from '../components/CardIcon';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <Container style={styles.container}>
      <Header>
        <Body><Text>MedEarn</Text></Body>
      </Header>
      <Content>
        <View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex:1}}>
              <Image source={{ uri: 'http://lorempixel.com/400/200/'}}
                style = {{ width: 75, height: 75, borderRadius: 37.5 }}
                />
            </View>
            
            <View style={{flex:3}}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
                <View style={{ alignItems: 'center', }} >
                  <Text>20</Text>
                  <Text style={{ fontSize: 10, color: 'grey' }} >posts</Text>
                </View>
                <View style={{ alignItems: 'center', }} >
                  <Text>206</Text>
                  <Text style={{ fontSize: 10, color: 'grey' }} >followers</Text>
                </View>
                <View style={{ alignItems: 'center', }} >
                  <Text>20</Text>
                  <Text style={{ fontSize: 10, color: 'grey' }} >following</Text>
                </View>
              </View>
            </View>

          </View>
        </View>
        
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
