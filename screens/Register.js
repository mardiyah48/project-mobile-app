import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image,ImageBackground} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { FlatList } from 'react-native-gesture-handler';

const Register = () => {
  return (
    <ImageBackground 
    source={require('../assets/Wallpaper.jpg')} 
    style={styles.backgroundImage}
  >
    <View style={styles.container}>
         <Image source={require('../assets/34022.jpg')} style={styles.logo} />
      <Text style={styles.title}>TOBIDAE</Text>
      <View style={styles.formContainer}>
        <Text style={styles.signUpText}>สมัครสมาชิก</Text>
        <TextInput 
          style={styles.input}
          placeholder="ชื่อสกุล"
          placeholderTextColor="#B0B0B0"
        />
        <TextInput 
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#B0B0B0"
          keyboardType="email-address"
        />
        <TextInput 
          style={styles.input}
          placeholder="รหัสผ่าน"
          placeholderTextColor="#B0B0B0"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.buttonSignUp}>
          <Text style={styles.buttonText}>สมัครสมาชิก</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent:'center'
      },
  container: {
    //flex: 1,
    //backgroundColor: '#2F4F4F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 32,
    color: '#FFD700',
    marginBottom: 10,
  },
  formContainer: {
    width: '80%',
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 24,
    color: '#2F4F4F',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonSignUp: {
    width: '100%',
    backgroundColor: '#2F4F4F',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  orText: {
    marginVertical: 10,
    color: '#2F4F4F',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginVertical: 10,
  },
  socialButton: {
    marginHorizontal: 10,
  },
});

export default Register;
