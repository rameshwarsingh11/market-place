import React from "react";
import { Image, StyleSheet, Touchable } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import ErrorMessage from "../components/ErrorMessage";
import * as Yup from "yup";
import AppFormField from "../components/AppFormField";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/poster.png")}
      ></Image>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeHolder="Email"
              textContentType="emailAddress"
            ></AppFormField>

            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              placeHolder="Password"
              name="password"
              textContentType="password"
              secureTextEntry
            ></AppFormField>

            <AppButton title="Login" onPress={handleSubmit}></AppButton>
          </>
        )}
      </Formik>
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
