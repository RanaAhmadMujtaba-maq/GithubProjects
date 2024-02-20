import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function Details({navigation, route}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>Details Page</Text>
            <Text style={{ fontSize: 30 }}>Props Value - {route.params.email}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ThirdClass')}>
                <Text style={{ fontSize: 30 }}>Redirect To Third Page</Text>
            </TouchableOpacity>
        </View>
    )
}
