import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView ,} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SubHerbDetail = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={24} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ตำหรับยาสมุนไพรสำหรับแม่และทารก</Text>
        <FontAwesome name="bookmark" size={24} color="#ffffff" />
      </View>
      
      {/* <Image source={require('../assets/herb-sub-image.jpg')} style={styles.herbImage} /> */}
      
      <View style={styles.detailsContainer}>
        <Text style={styles.herbName}>กระเจี๊ยบมอญ</Text>
        
        <View style={styles.pronunciationContainer}>
          <Text style={styles.pronunciationText}>กระเจี๊ยบมอญ</Text>
          <TouchableOpacity>
            <FontAwesome name="volume-up" size={24} color="#FFD700" />
          </TouchableOpacity>
        </View>

        <View style={styles.pronunciationContainer}>
          <Text style={styles.pronunciationText}>ka-che-mi-nyo (กาแจมีงอ)</Text>
          <TouchableOpacity>
            <FontAwesome name="volume-up" size={24} color="#FFD700" />
          </TouchableOpacity>
        </View>
        
        <Text style={styles.sectionTitle}>ชื่ออื่น</Text>
        <Text style={styles.sectionContent}>
          ว่านพระอาทิตย์ (กรุงเทพฯ) ละเอ็น (ภาคเหนือ) ชายเอ็น (ภาคใต้)
        </Text>
        
        <Text style={styles.sectionTitle}>สรรพคุณตามตำรายาไทย</Text>
        <Text style={styles.sectionContent}>
          แก้ไข้ แก้ร้อนใน แก้บิด แก้ท้องเสีย ฆ่าแมลงวันในบาดแผล
        </Text>
        
        <Text style={styles.sectionTitle}>สรรพคุณตามงานวิจัยโรคอีโบลา</Text>
        <Text style={styles.sectionContent}>
          แก้ไข้หวัด แก้ท้องเสีย ท้องร่วง ลดอาการอักเสบ
        </Text>
      </View>
      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesome name="mortar-pestle" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesome name="female" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesome name="home" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesome name="hospital" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#006400',
    padding: 10,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  herbImage: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 10,
    backgroundColor: '#F5DEB3',
    borderRadius: 10,
    margin: 10,
  },
  herbName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006400',
    textAlign: 'center',
  },
  pronunciationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF8DC',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  pronunciationText: {
    fontSize: 18,
    color: '#000',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#006400',
    marginVertical: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: '#000',
    marginVertical: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#006400',
    padding: 10,
  },
  footerButton: {
    alignItems: 'center',
  },
});

export default SubHerbDetail;
