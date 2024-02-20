import React, {useState,useEffect} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const MainScreen=({navigation})=>
{	
	useEffect(()=>{
		
		const session = auth.onAuthStateChanged(
		user => {
			if(user)
			{
				auth.signOut().then(()=>
	{
		navigation.navigate("LoginScreen");
	}).catch(error=>alert(error.message))
			}
			else
			{
				navigation.navigate("LoginScreen");
			}
		}
		)
		return session;
},[])
	

	
	return(<Text></Text>);
};
const styles = StyleSheet.create({})

export default MainScreen;