import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';

const LoginScreen = ({navigation}) => (
  <SafeAreaView>
    <Text>Login</Text>
    <TouchableHighlight onPress={() => navigation.navigate('Home')}>
      <Text> Go to Home</Text>
    </TouchableHighlight>
  </SafeAreaView>
);
export default LoginScreen;
