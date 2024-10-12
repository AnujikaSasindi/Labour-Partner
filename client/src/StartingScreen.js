import React, {useEffect} from 'react';
import { View, Text, Button, StyleSheet, Image, StatusBar, } from 'react-native';

const StartingScreen = ({ navigation }) => {

  useEffect(() => {
    const timeout = setTimeout(() => {
        navigation.navigate('Login');
      }, 4000);

      return () => clearTimeout(timeout);
    }, [navigation]); 

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo}/>
      <Text style={styles.title}>Labour Partner</Text>
    </View>
  );
};

// Basic styling for the screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#389F72', // Light blue background color
  },

  logo:{
    width: 134,
    height: 65,
    marginBottom:30,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffff'
  },
});

export default StartingScreen;

