import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

const StateManagement = () => {
    const [name , setName] = useState('');
  return (
    <View>
      <Text>Enter Name :</Text>
      <TextInput
      style={styles.nameInput}
      onChangeText = {(actualData) => setName(actualData)}
      />
      <Text>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    nameInput:{
        borderColor: "gray", width: "100%", borderWidth: 1, borderRadius: 10, padding: 10,
    },
})


export default StateManagement

