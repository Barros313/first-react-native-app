import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import * as NavBar from 'expo-navigation-bar';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    NavBar.setBackgroundColorAsync('#FFFFFF'); // Set the background color
    NavBar.setButtonStyleAsync('dark'); // Set the button style (light or dark)
  }, []);

  return (
    // <View style={styles.container}>
      <NavigationContainer>
        <NavBar style='dark'>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Details' component={DetailsScreen} />
          </Stack.Navigator>
        </NavBar>
      </NavigationContainer>
      /* <Profile/>
      <StatusBar style="auto" />
    </View> */
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

