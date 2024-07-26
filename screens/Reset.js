import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image,ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

const Reset = () => {
  return (
    
    <ImageBackground 
    source={require('../assets/Wallpaper.jpg')} 
    style={styles.backgroundImage}
  >
    <View style={styles.container}>  
      <Image source={require('../assets/34022.jpg')} style={styles.logo} />
      <Text style={styles.title}>TOBIDAE</Text>
      <View style={styles.formContainer}>
        <Text style={styles.resetPasswordText}>ตั้งรหัสผ่านใหม่</Text>
        <TextInput 
          style={styles.input}
          placeholder="ตั้งรหัสผ่านใหม่"
          placeholderTextColor="#B0B0B0"
          secureTextEntry={true}
        />
        <TextInput 
          style={styles.input}
          placeholder="ยืนยันรหัสผ่าน"
          placeholderTextColor="#B0B0B0"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.buttonSubmit}>
          <Text style={styles.buttonText}>ยืนยัน</Text>
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
    marginBottom: 20,
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
  resetPasswordText: {
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
  buttonSubmit: {
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
});

export default Reset;
