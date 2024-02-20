import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-web'
import DifferentViewGenerator from './DifferentViewGenerator'
import yelp from './yelp'
const SearchBar = () => {
  const [searchText , setSearchText] = useState('');
  return (
    <View style={styles.container}>
    <View style={styles.backgroundStyle}>
      <Feather name='search' style={styles.iconStyle}/>
      <TextInput
      value={searchText}
      autoCaptalize='none'
      autoCorrect = {false}
      placeholder="Search"
      style={styles.inputStyle}
      onChangeText = {(actualData) => {setSearchText(actualData)}}
      
      />
    </View>

 
    <DifferentViewGenerator sendText = {searchText}/>
 

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column'
  },
    iconStyle:
    {
        fontSize : 35,
        alignSelf: 'center',
        marginHorizontal: 15
    },

    inputStyle:{
       fontSize: 20,
    },

    backgroundStyle:{
        marginTop: 50,
        height:50,
        borderRadius: 5, 
        flexDirection:'row'
    },
  
})

export default SearchBar
