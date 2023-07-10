import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

function LoginScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/poster.png")}
      ></Image>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        placeHolder="Email"
        textContentType="emailAddress"
      ></AppTextInput>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        placeHolder="Password"
        onChangeText={(text) => setPassword(text)}
        textContentType="passwprd"
        secureTextEntry
      ></AppTextInput>
      <AppButton
        title="Login"
        onPress={() => console.log("Login button pressed")}
      ></AppButton>
    </Screen>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    padding: 10,
  },
});
export default LoginScreen;
