import { StyleSheet, Text, View, Image } from 'react-native';

const ProfilePicture = require('../assets/images/test.png');

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        borderRadius: 18,
    }, 
    name: {
        fontSize: 35,
    },
});

export default Profile = () => {
  return (
    <View>
      <Photo />
      <Name />
    </View>
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
