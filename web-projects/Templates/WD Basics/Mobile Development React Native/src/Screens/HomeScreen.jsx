import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Button title='List' onPress={()=>(navigation.navigate('Flat'))}/>
      <Button title='Images' onPress={()=>(navigation.navigate('Image'))}/>
      <Button title='Assignment' onPress={()=>(navigation.navigate('Assignment'))}/>
      <Button title='AssignmentImage' onPress={()=>(navigation.navigate('AssignmentImage'))}/>
      <Button title='StateManagement' onPress={()=>(navigation.navigate('StateManagement'))}/>
      <Button title='SquareScreen' onPress={()=>(navigation.navigate('SquareScreen'))}/>
      <Button title='SearchScreen' onPress={()=>(navigation.navigate('search'))}/>
      <Button title='Login' onPress={()=>(navigation.navigate('LoginScreen'))}/>
      <Button title='SignUp' onPress={()=>(navigation.navigate('signup'))}/>
      <Button title='MainScreen' onPress={()=>(navigation.navigate('MainScreen'))}/>
      <Button title='DisplayData' onPress={()=>(navigation.navigate('DisplayData'))}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#009988',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    elevation:6
  },
  textContainer:{
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
});
