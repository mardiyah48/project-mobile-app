import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import index from './screens/index';
import Login from './screens/Login';
import Register from './screens/Register';
import Forgot from './screens/Forgot';
import Reset from './screens/Reset';
import HerbalDetail from './screens/HerbalDetail';
import SubHerbDetail from './screens/SubHerbDetail';

const Stack = createNativeStackNavigator(
  {
    Home: HomeScreen,
    HerbDetail: HerbDetail,
    SubHerbDetail: SubHerbDetail,  // เพิ่มหน้าย่อยใน navigation stack
  },
  {
    initialRouteName: 'Home',
    
  }
);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={index} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Reset" component={Reset} />
        <Stack.Screen name="HerbalDetail" component={HerbalDetail} />
        <Stack.Screen name="SubHerbDetail" component={SubHerbDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;