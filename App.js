// src/App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import QuizScreen from './src/QuizScreen';
import ResultScreen from './src/ResultScreen';
import AboutScreen from './src/AboutScreen';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
