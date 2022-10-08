import React, {useEffect, useState} from 'react';
import {
  View,
  StatusBar,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TextInput,
  Button,
  Text,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import axios from 'axios';

import {useForm, FieldValues, Controller} from 'react-hook-form';

const StatusBarHeight =
  Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;

const Screens = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
    },
  });
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1}}>
        <View style={{alignItems: 'center', padding: 24}}>
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => {
              return (
                <TextInput
                  style={{
                    padding: 10,
                    borderStyle: 'solid',
                    borderWidth: 1,
                    width: 100,
                  }}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              );
            }}
            name={'firstName'}
          />
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Screens;
