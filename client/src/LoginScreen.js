import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    const handleLogin = () => {
        // Login logic here
    };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Hi, Welcome Back</Text>
        <View style={styles.divider} />

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

        <Text style={styles.label}>Password:</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#C7C7C7" 
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />

        <TouchableOpacity onPress={toggleCheckbox} style={styles.checkboxContainer}>
            <View style={[styles.checkbox, isChecked && styles.checkboxChecked]} />
            <Text style={styles.checkboxLabel}>Remember Me</Text>
            <Text onPress={() => navigation.navigate('FP')} style={styles.rem}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don’t have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.signUpLink}>Sign Up</Text>
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
    borderColor: '#389F72',
    borderWidth:2,
    borderRadius: 10,
    
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
    marginTop: 80,
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

export default LoginScreen;