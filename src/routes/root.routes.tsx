import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screens from '../screens';

const Stack = createNativeStackNavigator();

const RootRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="screen" component={Screens}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootRoutes;
