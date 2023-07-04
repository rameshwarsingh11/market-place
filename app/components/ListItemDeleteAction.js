import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItemDeleteAction(props) {
  return (
    <View styles={styles.container}>
      <MaterialCommunityIcons
        name="trash-can"
        size={35}
        color={colors.white}
      ></MaterialCommunityIcons>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ListItemDeleteAction;
