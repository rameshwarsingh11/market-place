import React from "react";
import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/icon.png")}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.headline}>Market Place options</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  loginText: {
    width: "100%",
    height: 70,
    justifyContent: "center",
  },
  registerText: {
    width: "100%",
    height: 70,
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 70,
    position: "absolute",
    top: 70,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  headline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
export default WelcomeScreen;
