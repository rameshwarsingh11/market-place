import React from "react";
import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/icon.png")}
    >
      {/*
      <Image styles={styles.logo} source={require("../assets/icon.png")} />
  */}
      <View style={styles.logoContainer}>
        <Text>Market Place options</Text>
      </View>

      <View style={styles.loginButton}>
        <Text styles={styles.loginText}>Login</Text>
      </View>
      <View style={styles.registerButton}>
        <Text styles={styles.registerText}>Register</Text>
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
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c44",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
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
});
export default WelcomeScreen;
