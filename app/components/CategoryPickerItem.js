import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 10,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
