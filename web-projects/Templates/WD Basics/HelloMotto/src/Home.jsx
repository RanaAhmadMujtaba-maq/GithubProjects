import React from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'

export default function Home({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Page</Text>
            <br />
            <Button title='ThirdClass' onPress={()=>(navigation.navigate('ThirdClass'))}/>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Details', { name: 'Full Stack Dev', age: 25, email: 'test@test.com' })}>
                <Text>Redirect To Details</Text>
            </TouchableOpacity> */}
        </View>
    );
}