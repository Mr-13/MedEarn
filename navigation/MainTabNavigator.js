import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SelectPhotoScreen from '../screens/SelectPhotoScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NewPostScreen from '../screens/NewPostScreen';

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
const SelectPhotoStack = createStackNavigator({
  SelectPhoto: SelectPhotoScreen,
});

SelectPhotoStack.navigationOptions = {
  tabBarLabel: () => {return null},
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'control-point' : 'control-point'}
    />
  ),
};
const NewPostStack = createStackNavigator({
  NewPost: NewPostScreen,
});

NewPostStack.navigationOptions = {
  tabBarLabel: () => {return null},
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'control-point' : 'control-point'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
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
  SelectPhotoStack,
  ProfileStack,
});
