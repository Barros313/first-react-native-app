import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <Profile/>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 18,
  }, name: {
    fontSize: 35,
  },
});

const ProfilePicture = require('./assets/images/test.png');

const Profile = () => {
  return (
    <>
      <Photo />
      <Name />
    </>
  );
  
};

const Name = () => {
  return (
    <>
      <Text style={styles.name}> Gabriel Barros </Text>
    </>
  );
};

const Photo = () => {
  return (
    <>
      <Image source={ProfilePicture} style={styles.image}></Image>
    </>
  );
};

