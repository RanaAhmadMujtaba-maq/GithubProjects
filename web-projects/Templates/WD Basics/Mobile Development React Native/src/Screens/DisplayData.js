import React,{useState} from 'react';
import { FlatList, View, Text } from 'react-native';
import {db} from './Firebase.js';

function DisplayData() {
  const [items, setItems] = useState([]);

  // Connect to the Firebase database and retrieve the data
  db().ref('my-app-DB').on('value', snapshot => {
    const data = snapshot.val();
    setItems(data);
  });

  // function getAlldata() {
  //   getDocs(collection(db, "users")).then(docSnap => {

  //     let users = [];
  //     docSnap.forEach((doc)=> {
  //     users.push({ ...doc.data(), id:doc.id })
  //     })
  //   })

  // Render each item in the list using the FlatList component
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <View>
          <Text>{item.Email}</Text>
          <Text>{item.Name}</Text>
        </View>
      )}
      keyExtractor={item => item.id}
    />
  );
}

export default DisplayData;