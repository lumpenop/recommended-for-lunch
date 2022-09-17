import React, {useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import axios from 'axios';

const API_KEY =
  'keRIOLYYA0r5WQ9+cJbTIvdZ2o5BrtzvL39Li2onduXZbR+lJ/b1wQ2BaZa0P438Xkyp8zakCAho1hYsLtnoqw==';
const URL =
  'https://infuser.odcloud.kr/oas/docs?namespace=3053840/v1/uddi:9cb85e53-3592-4a8d-9b07-eec77edbc8c2_model';

const HomeScreen = (): JSX.Element => {
  const [res] = React.useState(null);

  useEffect(() => {
    axios.get(URL).then(response => {});
  }, []);
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Text style={{color: 'black'}}>hi</Text>
        <Text>{res}</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
