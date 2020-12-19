import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

/** Screens */
import GetDetails from './components/GetDetails'
import ShowDetails from './components/ShowDetails'

const Stack = createStackNavigator();



  const CreateHomeStack = () => {
    return (
     <Stack.Navigator>
      <Stack.Screen name="Get Details" component={GetDetails} />
      <Stack.Screen name="Show Details" component={ShowDetails} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
      <NavigationContainer>
        <CreateHomeStack />
      </NavigationContainer>
  );
};


export default Navigation;
