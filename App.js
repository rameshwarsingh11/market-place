import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";

import { useDimensions } from "@react-native-community/hooks";

export default function App() {
  console.log(Dimensions.get("screen"));
  let x = 1;
  console.log("App Executed.");
  const handlePress = () => console.log("Text Pressed");
  return (
    <SafeAreaView style={styles.container}>
      <Text numberoflines={1} onPress={handlePress}>
        Open up App.js to start working on your app2! Very Big Text.Very Big
        TextVery Big Text
      </Text>
      <TouchableOpacity onPress={() => console.log("Image Pressed.")}>
        <Image
          blurRadius={0}
          fadeDuration={1000}
          source={{
            width: 300,
            height: 200,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableOpacity>
      <StatusBar style="auto" />
      <Button
        title="Click Me"
        color="orange"
        onPress={() =>
          Alert.prompt("Mytitle", "My message", (text) => console.log(text))
        }
      ></Button>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: "30%",
        }}
      ></View>
    </SafeAreaView>
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
