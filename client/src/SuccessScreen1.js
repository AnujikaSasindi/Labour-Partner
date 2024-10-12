import React, {useEffect} from 'react';
import { View, Text, Button, StyleSheet, Image, StatusBar, } from 'react-native';

const SucessScreen1 = ({ navigation }) => {

  useEffect(() => {
    const timeout = setTimeout(() => {
        navigation.navigate('Login');
      }, 4000);

      return () => clearTimeout(timeout);
    }, [navigation]); 

  return (
    <View style={styles.container}>
      <Text style={styles.detailText}>You have successfully created your account</Text>
      <Image source={require('../assets/logo.png')} style={styles.logo}/>
      <Text style={styles.title}>Labour Partner</Text>
      <Text style={styles.detailText}>Welcome to Labour Partner</Text>
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

  detailText: {
    fontSize:24,
    fontWeight: 'bold',
    margin:30,
    textAlign:'center',
    lineHeight:30,
    marginTop: 30,
  },

  logo:{
    width: 134,
    height: 65,
    marginTop:10,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffff'
  },
});

export default SucessScreen1;