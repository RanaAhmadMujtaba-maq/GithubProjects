import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import 'firebase/compat/auth';
import { Feather } from '@expo/vector-icons';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup=()=>{
      auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials=()=>{
        const user=userCredentials.user;
        console.log("Register with", user.email);
      }).catch(error=> alert(error.message))
    }

    const handleLogin=()=>{

      auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials=()=>{
        const user=userCredentials.user;
        console.log("Log In with", user.email);
      }).catch(error=> alert(error.message))

    }
  return (
    <View style={styles.container}>
    <View style={styles.backgroundStyle}>
      <Feather name='user' style={styles.iconStyle}/>
      <TextInput
      value={email}
      placeholder="Email"
      style={styles.inputStyle}
      onChangeText = {(text) => {setEmail(text)}}
      />

      <Feather name='lock' style={styles.iconStyle}/>
      <TextInput
      value={password}
      placeholder="Password"
      secureTextEntry
      style={styles.inputStyle}
      onChangeText = {(text) => {setPassword(text)}}
      />

      <TouchableOpacity
      style={styles.buttonStyle}  
      onPress={handleLogin}>
      <Text>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttonStyle}
      onPress={handleSignup}>
      <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
      },
      backgroundStyle:{
        flexDirection:"column"
      },
        iconStyle:
        {
            fontSize : 35,
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
        buttonStyle:{
            marginHorizontal: 30,
            color:'red'
            
        }
})

export default SignUp

