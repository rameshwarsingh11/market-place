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

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./app/components/AppButton";

export default function App() {
  /*const { landscpace } = useDeviceOrientation();
  const handlePress = () => console.log("Text Pressed");*/
  return (
    /*
    <SafeAreaView style={styles.container}>
      <Text numberoflines={1} onPress={handlePress}>
        Welcome to the Market Place!
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
          backgroundColor: "#fff",
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
          alignContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "dodgerblue",
            width: 100,
            height: 100,
            alignSelf: "flex-start",
            flexBasis: 100,
            flex: 1,
            flexShrink: 1,
          }}
        />
        <View
          style={{
            backgroundColor: "gold",
            width: 100,
            height: 100,

            position: "relative",
          }}
        />
        <View
          style={{
            backgroundColor: "tomato",
            width: 100,
            height: 100,
          }}
        />
        <View
          style={{
            backgroundColor: "grey",
            width: 100,
            height: 100,
          }}
        />
        <View
          style={{
            backgroundColor: "greenyellow",
            width: 100,
            height: 100,
          }}
        />
      </View>
      <WelcomeScreen />
      <ViewImageScreen />
    </SafeAreaView> */
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText children="M">Marketplace Home.</AppText>
      <MaterialCommunityIcons name="email" size={200} color="dodgerblue" />
      <AppButton
        title="Login"
        onPress={() => console.log("Login button pressed")}
      />
    </View>
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
