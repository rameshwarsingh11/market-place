import React from "react";
import { Text, StyleSheet } from "react-native";
function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "dodgerblue",
    fontSize: 20,
    fontFamily: "Avenir",
  },
});

export default AppText;
