import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity,Image } from 'react-native';

export default function ImgScreen() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
    <Button title='PressMe' onPress={()=>{setCount(count+1)}}></Button>
      <Text >Counter : {count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    height:200,
    width: 200,
    borderColor: 'black',
    marginTop: 30,
    justifyContent: 'center',
    alignItems:'center'

   
  },
  imageStyling: {
    alignSelf:'center',
    width: 200,
    height:150,

  },
  textStyling:{
    marginTop: 10.
    
  },
});
