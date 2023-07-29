import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LessonsPage from './pages/LessonsPage';
import ControlPage from './pages/ControlPage';

// Translations
import '../translation';
import {LangDialog} from './dialog/LangDialog';
import {Provider} from 'react-redux';
import store from './redux/Store';
import FieldsPage from './pages/FieldsPage';
import FieldsViewPage from './pages/FieldViewPage';
import ImageViewPage from './pages/ImageViewPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Lessons" component={LessonsPage} />
          <Stack.Screen name="Control" component={ControlPage} />
          <Stack.Screen name="Fields" component={FieldsPage} />
          <Stack.Screen name="FieldsView" component={FieldsViewPage} />
          <Stack.Screen name="ImageView" component={ImageViewPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
