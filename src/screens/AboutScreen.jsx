import React from 'react';
import { StyleSheet, Button, Text, View, } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({navigation}) => {
  return (
    <MainLayout>
      <Text styles={styles.headerText}>App Name: My To-Do App</Text>
      <Text>Developer: Denver Krushel 000920687, CPRG303-C</Text>
      <Text>Date: {new Date().toLocaleDateString()}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
      </View>
    </MainLayout>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20,
    alignSelf: 'flex-start', // Optional: Align button to the left
  },
});