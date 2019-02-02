import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});


HomeStack.navigationOptions = {
  tabBarLabel: () => {return null},
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'home' : 'home'}
    />
  ),
};
const AddStack = createStackNavigator({
  Settings: ProfileScreen,
});

AddStack.navigationOptions = {
  tabBarLabel: () => {return null},
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'control-point' : 'control-point'}
    />
  ),
};


const ProfileStack = createStackNavigator({
  Settings: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: () => {return null},
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'person' : 'person'}
    />
  ),
};


export default createBottomTabNavigator({
  HomeStack,
  AddStack,
  ProfileStack,  
});
