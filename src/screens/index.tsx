import React, {useEffect, useState} from 'react';
import {View, StatusBar, Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const StatusBarHeight =
  Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;

const Screens = () => {
  const [barWidth, setBarWdith] = useState(10);

  useEffect(() => {
    const setTimeBar = setInterval(() => {
      setBarWdith(prev => prev + 1);
    }, 1000);
    return () => clearInterval(setTimeBar);
  }, []);

  useEffect(() => {
    console.log(barWidth);
  }, [barWidth]);

  return (
    <View style={{alignItems: 'center', flex: 1}}>
      <View
        style={{
          backgroundColor: '#333444',
          height: StatusBarHeight,
          width: '100%',
        }}></View>
      <StatusBar backgroundColor="#333444" barStyle={'light-content'} />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{width: 300, backgroundColor: '#ececec', height: 30}}>
          <View
            style={{
              width: barWidth,
              height: 30,
              backgroundColor: 'skyblue',
            }}></View>
        </View>
      </View>
    </View>
  );
};

export default Screens;
