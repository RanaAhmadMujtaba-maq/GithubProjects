import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';

export default function AssignmentImageScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/img_1.jpeg')} style={styles.imageTopLeft}></Image>
      <Image source={require('../../assets/img_2.jpeg')} style={styles.imageMiddle}></Image>
      <Image source={require('../../assets/img_3.jpeg')} style={styles.imageTopRight}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  imageTopLeft:{
    alignItems:'flex-start',
    height: 50,
    width: 50
  },
  imageTopRight:{
    alignItems: 'flex-end',
    height: 50,
    width: 50
  },
  imageMiddle:{
    marginTop: 50,
    alignItems:'center',
    height:50,
    width: 50
  }
});
