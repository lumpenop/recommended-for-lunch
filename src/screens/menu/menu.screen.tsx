import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const HomeScreen = (): JSX.Element => {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Text style={{color: 'black'}}>hi</Text>
        <Text>menu</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
