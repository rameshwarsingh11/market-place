import React, { useEffect } from "react";
import { StyleSheet, Platform, StatusBar } from "react-native";

import "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import Screen from "./app/components/Screen";
import * as Permissions from "expo-permissions";

export default function App() {
  const requestPermission = async () => {
    const result = await Permissions.askAsync(
      Permissions.MEDIA_LIBRARY,
      Permissions.LOCATION_BACKGROUND
    );

    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("Please enable permission to access your media library");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);
  return <Screen></Screen>;
}
const containerStyle = { backgroundColor: "orange" };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
