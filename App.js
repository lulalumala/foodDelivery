import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import WelcomeScreen from './src/screens/Welcome';
import SignUp from './src/screens/SignUp';
import PhoneScreen from './src/screens/PhoneRegister';


const Stack=createNativeStackNavigator()

const App= () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen component={HomeScreen} name='Home' />
        <Stack.Screen component={SignUp} name='Sign Up'/>
        <Stack.Screen component={LoginScreen} name='Login' />
        <Stack.Screen component={WelcomeScreen} name='Welcome' />
        <Stack.Screen component={PhoneScreen} name='Phone' />

      </Stack.Navigator>
 </NavigationContainer>
  );



};

const styles = StyleSheet.create({
  heading: {
    color: "blue",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:50
  },
  inputStyle: {
    borderColor: "black",
    borderWidth: 1,
    fontSize: 15,
    width: '60%'
  }, 
  opacity: {
    cursor: "pointer",
    backgroundColor: "grey",
    width: 70,
    alignSelf: "center",
    marginTop: 10,
    borderRadius:5
  }
  
})

export default App;
