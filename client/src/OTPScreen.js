import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OTPInputScreen = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const otpRefs = useRef([]);

  // Function to handle OTP input
  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // If the value is entered and it's not the last box, move to the next box
    if (value && index < otp.length - 1) {
        otpRefs.current[index + 1].focus();
      }
      // If the box is cleared and it's not the first box, move back to the previous box
      else if (!value && index > 0) {
        otpRefs.current[index - 1].focus();
      }
  };

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
        <Text style={styles.title}>Verification</Text>
        <View style={styles.divider} />

      <Text style={styles.label}>OTP code:</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => otpRefs.current[index] = ref}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleOtpChange(value, index)}
          />
        ))}
      </View>
      <Text style={styles.resendText}>Didn’t receive the OTP code?</Text>
      <TouchableOpacity onPress={handleResend}>
          <Text style={styles.resendLink}> Resend the OTP code</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('Success1')}>
        <Text style={styles.submitText}>Submit</Text>
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

  title: {
    fontSize: 26,
    fontWeight: 'bold',
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

  label: {
    fontSize: 18,
    marginBottom: 20,
    marginLeft:'8%',
    marginTop:50
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
    marginLeft:'10%',
  },

  otpInput: {
    borderWidth: 1,
    borderBottomWidth:5,
    borderColor: '#389F72',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 24,
    width: 40,
    height: 50,
    marginHorizontal: 5,
  },

  resendText: {
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },

  resendLink: {
    color: '#389F72',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginBottom:80
  },
  
  submitButton: {
    backgroundColor: '#389F72',
    paddingVertical:14,
    borderRadius: 8,
    width:'84%',
    height:54,
    marginLeft:'8%'
  },

  submitText: {
    color: '#fff',
    fontSize: 18,
    textAlign:'center',
  },

});

export default OTPInputScreen;
