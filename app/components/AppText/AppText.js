import React from "react";
import { Text } from "react-native";
function AppText({ children, ...otherProps }) {
  return <Text {...otherProps}>{children}</Text>;
}

export default AppText;
