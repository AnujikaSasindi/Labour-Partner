import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const VerificationScreen = () => {
  const navigation = useNavigation();
  const [newpassword, setNewPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');


  // Function to handle OTP submission
  const handleSubmit = () => {
    console.log('Entered OTP:', otp.join(''));
    // Handle the OTP submission logic here
  };

  // Function to handle resend OTP
  const handleResend = () => {
    console.log('Resend OTP');
    // Add logic to resend the OTP
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>New Password</Text>
        <View style={styles.divider} />

        <Text style={styles.label}>New Password:</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter your new password"
            placeholderTextColor="#C7C7C7" 
            value={newpassword}
            onChangeText={setNewPassword}
            secureTextEntry
        />

        <Text style={styles.label}>Confirm Password:</Text>
        <TextInput
            style={styles.input}
            placeholder="Confirm your new password"
            placeholderTextColor="#C7C7C7" 
            value={confirmpassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
        />

        
        <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.submitText}>Verify</Text>
        </TouchableOpacity>
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
    marginBottom:50
  },

  label: {
    fontSize: 16,
    marginVertical: 10,
    marginLeft:'12%',
  },

  input: {
    height: 54,
    width:'84%',
    marginLeft:'8%',
    borderColor: '#389F72',
    borderWidth:2,
    borderRadius: 10,  
    opacity:0.6,
    paddingHorizontal: 15,
  },
  
  submitButton: {
    backgroundColor: '#389F72',
    paddingVertical:14,
    borderRadius: 8,
    width:'84%',
    height:54,
    marginLeft:'8%',
    marginTop: 50
  },

  submitText: {
    color: '#fff',
    fontSize: 18,
    textAlign:'center',
  },

});

export default VerificationScreen;