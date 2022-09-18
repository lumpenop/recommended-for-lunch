import React from 'react';

import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/home/home.screen';
import MenuScreen from '../screens/menu/menu.screen';

type RootStackParamList = {
  Home: undefined;
  Menu: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
