import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Login logic here
    };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Create Account</Text>
        <View style={styles.divider} />

        <Text style={styles.label}>UserName:</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter your username"
            placeholderTextColor="#C7C7C7"
            value={username}
            onChangeText={setUsername}
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#C7C7C7" 
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
        />

        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            placeholderTextColor="#C7C7C7"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
        />

        <Text style={styles.label}>Password:</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#C7C7C7" 
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />

        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('otp')}>
            <Text style={styles.loginButtonText}>Signup</Text>
        </TouchableOpacity>

        <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.signUpLink}>Log In</Text>
            </TouchableOpacity>
        </View>


    </View>
  );
};

// Basic styling for the screen
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
    fontSize: 16,
    marginVertical: 10,
    marginLeft:'12%',
  },

  input: {
    height: 54,
    width:'84%',
    marginLeft:'8%',
    borderRadius: 10,
    borderColor: '#389F72',
    borderWidth:2,
    opacity:0.6,
    paddingHorizontal: 15,
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:'8%',
    marginRight:'8%',
    marginTop:30,
  },

  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#389F72',
    borderRadius: 4,
    backgroundColor: 'transparent',
    marginRight: 8,
  },

  checkboxChecked: {
    backgroundColor: '#389F72',
    opacity:0.6
  },

  checkboxLabel: {
    flex:1,
    fontSize: 16,
    color: '#333',
  },

  rem: {
    fontSize: 16,
    color: '#DF131F',
  },

  loginButton: {
    width:'84%',
    marginLeft:'8%',
    backgroundColor: '#389F72', // Green button
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 50,
  },

  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },

  signUpText: {
    fontSize: 16,
    marginRight: 5,
  },

  signUpLink: {
    fontSize: 16,
    color: '#389F72',
  },

});

export default SignupScreen;