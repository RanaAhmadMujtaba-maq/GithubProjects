import React, { useState } from "react";

import { StyleSheet, View, Image, Button, Text } from "react-native";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";
import image5 from "./assets/image5.jpg";
import image6 from "./assets/image6.jpg";
import image7 from "./assets/image7.jpg";
import image8 from "./assets/image8.jpg";
import image9 from "./assets/image9.jpg";
import image10 from "./assets/image10.jpg";
const imgData = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

let i = 0;

export default function App() {
  const [imageURL, setImage] = useState(imgData[0]);

  let Load_Next_Image = () => {
    if (i == imgData.length - 1) {
      i = 0;
    } else {
      i++;
    }
    setImage(imgData[i]);
    return;
  };
  
  let Load_Prev_Image = () => {
    if (i == 0) {
      i = imgData.length - 1;
    } else {
      i--;
    }
    setImage(imgData[i]);
    return;
  };

  let img = imageURL.split("/").pop();
  let imgName = img.substr(0, img.indexOf('.'))

  return (
    <View>
      <View style={styles.MainContainer}>

        <Image source={imageURL} style={styles.imageStyle} />
        <Text style={styles.txtStyle}>Image Name:   {imgName}</Text>

      </View>
      <View>
        <Button
          style={styles.buttonStyle}
          title="Next Image"
          onPress={Load_Next_Image}
        />
        <Button
          style={styles.buttonStyle}
          title="Prev Image"
          onPress={Load_Prev_Image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 1,
    margin: 2,
  },

  imageStyle: {
    marginTop: 50,
    width: 1500,
    height: 500,
  },

  txtStyle: {
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 25,
  }
  
});
