import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image,ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

const Login = ({navigation}) => {
  return (
    <ImageBackground 
    source={require('../assets/Wallpaper.jpg')} 
    style={styles.backgroundImage}
  >
    <View style={styles.container}>
        <Image source={require('../assets/34022.jpg')} style={styles.logo} />
      <Text style={styles.title}>TOBIDAE</Text>
      <View style={styles.formContainer}>
        <Text style={styles.signInText}>เข้าสู่ระบบ</Text>
        <TextInput 
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#B0B0B0"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        />
        <TextInput 
          style={styles.input}
          placeholder="รหัสผ่าน"
          placeholderTextColor="#B0B0B0"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.buttonSignIn} onPress={()=> navigation.navigate('Home')}>
          <Text style={styles.buttonText}>เข้าสู่ระบบ</Text>
        </TouchableOpacity>
        <View>
            <TouchableOpacity onPress={()=> navigation.navigate('Forgot')}>
        <Text style={styles.orText}>ลืมรหัสผ่าน?</Text>
            </TouchableOpacity>
        </View>
     
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
  signInText: {
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
  buttonSignIn: {
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

export default Login;
