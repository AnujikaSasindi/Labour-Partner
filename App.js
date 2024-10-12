import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartingScreen from './client/src/StartingScreen';
import LoginScreen from './client/src/LoginScreen';
import SignupScreen from './client/src/SignupScreen';
import OTPScreen from './client/src/OTPScreen';
import ForgotPasswordScreen from './client/src/ForgotPasswordScreen';
import VerificationScreen from './client/src/VerificationScreen';
import NewPasswordScreen from './client/src/NewPasswordScreen';
import SuccessScreen1 from './client/src/SuccessScreen1';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Starting">
        <Stack.Screen name="Starting" component={StartingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="otp" component={OTPScreen} />
        <Stack.Screen name="FP" component={ForgotPasswordScreen} />
        <Stack.Screen name="Verify" component={VerificationScreen} />
        <Stack.Screen name="NP" component={NewPasswordScreen} />
        <Stack.Screen name="Success1" component={SuccessScreen1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
