import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function AssignmentScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTopLeft}>Top-Left</Text>
      <Text style={styles.textMiddle}>Middle</Text>
      <Text style={styles.textTopRight}>Top-Right</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    position: 'relative'
  },
  textTopLeft:{
    position:'absolute',
   
  },
  textTopRight:{
    position:'absolute',
    right:0,
  },
  textMiddle:{
    
   position:'absolute',
   top: 30,
   alignSelf: 'center'

  }
});
