import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image,ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

const Index = ({navigation}) => {
  return (
    <ImageBackground 
      source={require('../assets/Wallpaper.jpg')} 
      style={styles.backgroundImage}
    >
    <View style={styles.container}>
      <Image source={require('../assets/34022.jpg')} style={styles.logo} />
      <Text style={styles.title}>TOBIDAE</Text>
      <View style={styles.formContainer}>
        <TouchableOpacity style={styles.buttonSignIn} onPress={()=> navigation.navigate('Login')}>
          <Text style={styles.buttonText}>เข้าสู่ระบบ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSignUp} onPress={()=> navigation.navigate('Register')}>
          <Text style={styles.buttonTextSignUp}>สมัครสมาชิก</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="facebook" size={32} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="google" size={32} color="#DB4437" /> 
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
  logo: {
    width: 100,
    height: 100,
    borderRadius:90 
    
  },
  title: {
    fontSize: 32,
    color: '#336633',
    marginVertical: 20,
  },
  formContainer: {
    width: '80%',
  
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  buttonSignIn: {
    width: '100%',
    backgroundColor: '#2F4F4F',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonSignUp: {
    width: '100%',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#2F4F4F',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  buttonTextSignUp: {
    color: '#2F4F4F',
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
  forgotPasswordText: {
    marginTop: 20,
    color: '#2F4F4F',
  },
});

export default Index;
