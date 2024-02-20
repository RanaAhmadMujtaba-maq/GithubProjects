import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DifferentViewGenerator = (props) => {
  return (
    <View style={styles.container}>

    <view style={styles.FirstView}>
    <Text style={styles.FirstText}>{props.sendText}</Text>
    </view>

    <view style={styles.SecondView}>
    <Text style={styles.SecondText}>{props.sendText}</Text>
    </view>

    <view style={styles.ThirdView}>
    <Text style={styles.ThirdText}>{props.sendText}</Text>
    </view>

    <view style={styles.FourView}>
    <Text style={styles.FourText}>{props.sendText}</Text>
    </view>

    <view style={styles.FiveView}>
    <Text style={styles.FiveText}>{props.sendText}</Text>
    </view>

    <view style={styles.SixView}>
    <Text style={styles.SixText}>{props.sendText}</Text>
    </view>

    <view style={styles.SevenView}>
    <Text style={styles.SevenText}>{props.sendText}</Text>
    </view>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        padding: 20,
        margin: 10,
      },
    FirstView:
    {
        flex: 0.3,
        marginBottom: 10,
        backgroundColor: "#ccbbff",

        borderWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,   
    },
    SecondView:
    {
     flex: 0.3,
     marginBottom: 10,
    backgroundColor: "#bbffaa",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    },
    ThirdView:
    {
        flex: 0.3,
        marginBottom: 10,
    backgroundColor: "eeffdd",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
        
    },
    FourView:
    {
        flex: 0.3,
        marginBottom: 10,
        backgroundColor:'#f0ff',
        borderWidth: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,  
    },
    FiveView:
    {
        flex: 0.3,
        marginBottom: 10,
    backgroundColor: "green",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
        
    },
    SixView:
    {
        flex: 0.3,
        marginBottom: 10,
        backgroundColor: "pink",
        borderWidth: 5,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    SevenView:
    {
        flex: 0.3,
        marginBottom: 10,
        backgroundColor: "#aaffbb",
        borderWidth: 5,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    FirstText:
    {
        fontSize : 10,
    },
    SecondText:
    {
        fontSize : 20,
    },
    ThirdText:
    {
        fontSize : 30,
    },
    FourText:
    {
        fontSize : 40,
    },
    
    FiveText:
    {
        fontSize : 50,
    },
    SixText:
    {
        fontSize : 60,
    },
    SevenText:
    {
        fontSize : 70,
    },
})

export default DifferentViewGenerator

