import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HerbalDetail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* <Image source={require('')} style={styles.backIcon} /> */}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ความรู้สมุนไพร</Text>
      </View>
      <ScrollView style={styles.content}>
        <Image source={require('../assets/A.jpeg')} style={styles.herbImage} />
        <View style={styles.herbDetailContainer}>
          <Text style={styles.herbName}>กระเจี๊ยบมอญ</Text>
          <Text style={styles.herbScientificName}>ชื่อพฤกษศาสตร์ Abelmoschus esculentus (L.) Moench</Text>
          <Text style={styles.herbFamily}>วงศ์ MALVACEAE</Text>
          <Text style={styles.herbDescription}>ลักษณะทั่วไป: เป็นไม้ล้มลุก สูงถึงยาวประมาณ1.5เมตร มีสีเขียวอ่อน ใบใหญ่เป็น 3-7 แฉก รูปไข่ปลายแหลม สีเขียวอมเหลือง...</Text>
          <Text style={styles.herbPropertiesThai}>สรรพคุณตามตำราไทย: แก้โรคในลำไส้ แก้บิด...</Text>
          <Text style={styles.herbPropertiesModern}>สรรพคุณตามตำราใช้ในปัจจุบัน: เพิกที่ราก รวมกับน้ำตาลเป็นยาระบาย...</Text>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('SubHerbDetail')}>
  <Text>ตำหรับยาสมุนไพรสำหรับแม่และทารก</Text>
</TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAF0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#336633',
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 20,
    color: '#FFFFFF',
    marginLeft: 16,
  },
  content: {
    padding: 16,
  },
  herbImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  herbDetailContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginTop: 16,
    elevation: 3,
  },
  herbName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#336633',
  },
  herbScientificName: {
    fontSize: 16,
    color: '#666666',
    marginTop: 8,
  },
  herbFamily: {
    fontSize: 16,
    color: '#666666',
    marginTop: 8,
  },
  herbDescription: {
    fontSize: 14,
    color: '#666666',
    marginTop: 8,
  },
  herbPropertiesThai: {
    fontSize: 14,
    color: '#666666',
    marginTop: 8,
  },
  herbPropertiesModern: {
    fontSize: 14,
    color: '#666666',
    marginTop: 8,
  },
});

export default HerbalDetail;
