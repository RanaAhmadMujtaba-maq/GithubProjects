import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import ColorChanger from './ColorChanger';

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const COLOR_INCREMENT=15;

  const onIncrease =()=>{setColor(color, COLOR_INCREMENT)};
  const onDecrease =()=>{setColor(color, -1*COLOR_INCREMENT)};

  const setColor =(color, change) => {
    switch(color){
      case red:
        red+change >255 || red+change<0?null:setRed(red+change);
         break;

         case green:
        green+change >255 || green+change<0?null:setGreen(green+change);
         break;

         case blue:
          blue+change >255 || blue+change<0?null:setBlue(blue+change);
         break;
    }
  }
  return (

    <View>
    <ColorChanger
    color="red"
    onIncrease={()=>{
      setColor('red', COLOR_INCREMENT);
    }}
    onDecrease={()=>{
      setColor('red', -1*COLOR_INCREMENT);
   }}
    ></ColorChanger>

    <ColorChanger
    color="Green"
    onIncrease={()=>{
      setColor('green', COLOR_INCREMENT);
    }}
    onDecrease={()=>{
      setColor('green', -1*COLOR_INCREMENT);
   }}
    ></ColorChanger>

    <ColorChanger
    color="Blue"
    onIncrease={()=>{
      setColor('blue', COLOR_INCREMENT);
    }}
    onDecrease={()=>{
      setColor('blue', -1*COLOR_INCREMENT);
   }}
    ></ColorChanger>

<View style={{height:150, width:150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></View>

    </View>

  )
}

const styles = StyleSheet.create({
  
})

export default SquareScreen

