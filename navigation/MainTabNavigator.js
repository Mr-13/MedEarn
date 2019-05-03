import React from 'react';
import { Platform } from 'react-native';
import {
  createSwitchNavigator, createStackNavigator, createBottomTabNavigator
} from 'react-navigation';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SelectPhotoScreen from '../screens/SelectPhotoScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NewPostScreen from '../screens/NewPostScreen';
import SearchScreen from '../screens/SearchScreen';
import LikeScreen from '../screens/LikeScreen';

const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  })

const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: () => { return null },
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'home' : 'home'}
        />
      )
    }),
  },

  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: () => { return null },
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'search' : 'search'}
        />
      )
    }),
  },

  SelectPhotoScreen: {
    screen: SelectPhotoScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: () => { return null },
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'control-point' : 'control-point'}
        />
      )
    }),
  },

  LikeScreen: {
    screen: LikeScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: () => { return null },
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'favorite' : 'favorite'}
        />
      )
    }),
  },

  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: () => { return null },
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'person' : 'person'}
        />
      )
    }),
  },

  SettingsScreen: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: () => { return null },
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'home' : 'home'}
        />
      )
    }),
  }
}, {
  swipeEnabled: true,
  animationEnabled: true
}
);


const AppStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: AppTabNavigator,
  }
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
)

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppStackNavigator,
})






// SelectPhotoStack.navigationOptions = {
//   tabBarLabel: () => {return null},
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'control-point' : 'control-point'}
//     />
//   ),
// };
