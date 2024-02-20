import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const ColorChanger = (props) => {

  return (
    <View>
    <Text>{props.color}</Text>
    <Button 
    title='Increase'
    onPress={()=> props.onIncrease()}
    />
    
    <Button 
    title='Decrease'
    onPress={()=> props.onDecrease()}
    />
    </View>
  )
}

const styles = StyleSheet.create({})

export default ColorChanger;

