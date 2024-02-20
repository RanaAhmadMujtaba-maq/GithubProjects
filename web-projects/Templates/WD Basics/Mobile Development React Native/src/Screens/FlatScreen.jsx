import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';

export default function FlatScreen() {

  const friends = [
    {name : 'Ali', age : 10, CGPA: 3.3},
    {name : 'Zar', age : 10, CGPA: 3.3},
    {name : 'Kazmi', age : 10, CGPA: 3.3}
  ];
  return (
    <FlatList
    data={friends}
    renderItem={({item}) => {
    return(
      <Text style={styles.textStyle}>
      
       Name : {item.name} Age : {item.age} CGPA : {item.CGPA} 
        </Text>

        
    );
}}
    />
    );

}
const styles = StyleSheet.create(
  {
  container: {
    backgroundColor: '#009988',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    elevation:6
  },
  textStyle:{
    fontSize: 30,
    color: 'red',
    fontWeight: 'bold',
    alignSelf: 'center'
  }
}
);
