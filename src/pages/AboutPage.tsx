import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const AboutPage = () => {
  return<View>
    <Text>About Page</Text>
  </View>
};



export default AboutPage;
