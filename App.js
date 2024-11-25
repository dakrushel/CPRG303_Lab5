import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Home Screen' }} />
        <Drawer.Screen name="About" component={AboutScreen} options={{ title: 'About Screen' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;