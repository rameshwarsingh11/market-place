import React from "react";
import { StyleSheet, Platform, StatusBar } from "react-native";

import "react-native-gesture-handler";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingDetails from "./app/screens/ListingDetails";
import ListingsScreen from "./app/screens/ListingsScreen";

export default function App() {
  return <ListingDetails />;
}
const containerStyle = { backgroundColor: "orange" };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
