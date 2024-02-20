import React, {useState,useEffect} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {db} from './Firebase.js';
import {collection,setDoc,doc} from "firebase/firestore";

const LoginScreen=({navigation})=>
{
	const [name, setName]= useState('');
	const [email, setEmail]=useState('');
	
	function create()
	{
		setDoc(doc(collection(db,"users")),{
			name: name,
			email: email,
		}).then(()=>{
			console.log("data saved");
		}).catch(error=>{console.log()})
		}
	
	
	
	return(
	<View behavior='padding' style={styles.container}>
	 <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={text => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
         
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
         onPress={create} 
          style={styles.button}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        
      </View>
	</View>
	);
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
})

export default LoginScreen;