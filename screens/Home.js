import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const herbs = [
  { id: '1', image: '', title: '' },
  { id: '2', image: '', title: '' },
  { id: '3', image: '', title: '' },
  { id: '4', image: '', title: '' },
];

const Home = ({navigation}) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemNumber}>{item.id}</Text>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemContent}></View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ความรู้สมุนไพร</Text>
        
      </View>
      <TextInput 
        style={styles.searchBar}
        placeholder=""
        placeholderTextColor="#B0B0B0"
        FontAwesome name="search" size={24} color="white" />
    
      <FlatList
        data={herbs}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={()=> navigation.navigate('HerbalDetail')}>
          <FontAwesome name="home" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesome name="user" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          {/* <Image source={require('../assets/logo.png')} style={styles.footerLogo} /> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesome name="info" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9EAD3',
  },
  header: {
    backgroundColor: '#2F4F4F',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
  searchBar: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  list: {
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemNumber: {
    fontSize: 24,
    color: '#FFD700',
    marginRight: 10,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  itemContent: {
    flex: 1,
    backgroundColor: '#D3A673',
    borderRadius: 5,
    padding: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#2F4F4F',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerLogo: {
    width: 40,
    height: 40,
  },
});

export default Home;
