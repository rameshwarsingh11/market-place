import React, { useEffect, useState } from "react";
import { StyleSheet, Platform, StatusBar, Button, Image } from "react-native";

import "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import Screen from "./app/components/Screen";
import * as Permissions from "expo-permissions";

export default function App() {
  const [imageUri, setImageUri] = useState();
  const requestPermission = async () => {
    const result = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);

    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("Please enable permission to access your media library");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) {
        setImageUri(result.imageUri);
      }
    } catch (error) {
      console.log("There was an error reading the Image", error);
    }
  };
  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage}></Button>
      <Image
        source={{ uri: imageUri }}
        style={{ width: 200, height: 200 }}
      ></Image>
    </Screen>
  );
}
const containerStyle = { backgroundColor: "orange" };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
