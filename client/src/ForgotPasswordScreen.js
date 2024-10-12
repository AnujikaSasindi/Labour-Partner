import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from './LoginScreen';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  // Function to handle sending the verification code
  const handleSend = () => {
    navigation.navigate('Verify');
};

  // Function to navigate back to login
  const handleBackToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackToLogin}>
        <Ionicons name="chevron-back-outline" size={24} color="#000" /> 
      </TouchableOpacity>

      <Text style={styles.title}>Forgot Password</Text>
      <View style={styles.divider} />

      <Text style={styles.detailText}>Verification code will be send to your registered phone number</Text>
      <TouchableOpacity style={styles.loginButton} onPress={handleSend}>
          <Text style={styles.loginButtonText}>Send</Text>
      </TouchableOpacity>
      <Text onPress={() => navigation.navigate('Login')} style={styles.backText}>Back to Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingTop: 50,
  },

  backButton: {
    position: 'absolute',
    top: 55,
    left: '4%',
    zIndex: 1,
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
    textAlign: 'center'
  },

  divider: {
    height: 1.5,
    backgroundColor: '#389F72',
    marginVertical: 5,
    width: '100%',
    marginBottom:20
  },

  detailText: {
    fontSize:20,
    fontWeight: 'bold',
    margin:30,
    textAlign:'center',
    lineHeight:30,
    marginTop: 100,
  },
  
  loginButton: {
    width:'84%',
    marginLeft:'8%',
    backgroundColor: '#389F72', // Green button
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 40,
  },

  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  backText: {
    fontSize:16,
    margin:30,
    textAlign:'center',
    marginTop: 30,
    textDecorationLine: 'underline',
    color: '#389F72'
  },

});

export default ForgotPasswordScreen;
