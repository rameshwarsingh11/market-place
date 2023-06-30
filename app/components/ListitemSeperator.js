import React from "react";
import colors from "../config/colors";
import { StyleSheet, View } from "react-native";
function ListitemSeperator() {
  return <View style={styles.seperator}></View>;
}
const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});
export default ListitemSeperator;
