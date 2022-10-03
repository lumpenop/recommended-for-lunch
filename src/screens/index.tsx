import React, {useEffect, useState} from 'react';
import {View, StatusBar, Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import axios from 'axios';
import {API} from 'react-native-dotenv';

const StatusBarHeight =
  Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;

type AnimationFrame = {
  end: number;
  set: React.Dispatch<React.SetStateAction<{}>>;
};

const Screens = () => {
  const [state, setState] = useState({});
  const animationFrame = ({end, set}: AnimationFrame) => {
    let startTimestamp: number = 0;
    const step = (timestamp: number) => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }
      const progress = Math.min((timestamp - startTimestamp) / end, 1);
      const result = Math.floor(progress * end);

      if (progress === 1) {
        set({count: 0});
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    animationFrame({end: 5000, set: setState});
  }, [state]);

  useEffect(() => {
    axios.get(API).then(res => console.log('round', res.data.round));
  }, [state]);

  return (
    <View style={{alignItems: 'center', flex: 1}}>
      <View
        style={{
          backgroundColor: '#333444',
          height: StatusBarHeight,
          width: '100%',
        }}
      />
      <StatusBar backgroundColor="#333444" barStyle={'light-content'} />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{width: 300, backgroundColor: '#ececec', height: 30}}>
          <View
            style={{
              width: 300,
              height: 30,
              backgroundColor: 'skyblue',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Screens;
