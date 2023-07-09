import React, { useState } from "react";
import {
  StyleSheet,
  Platform,
  StatusBar,
  View,
  TextInput,
  Text,
  Switch,
} from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetails from "./app/screens/ListingDetails";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import "react-native-gesture-handler";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [isNew, setIsNew] = useState(false);
  const categories = [
    {
      label: "Sport",
      value: 1,
    },
    {
      label: "Poster",
      value: 2,
    },
    {
      label: "Others",
      value: 3,
    },
  ];

  return (
    <Screen>
      <AppTextInput placeholder="Email" icon="email" />
      <Switch
        value={isNew}
        onValueChange={(newValue) => setIsNew(newValue)}
      ></Switch>
      <AppPicker
        items={categories}
        icon="apps"
        placeholder="Category"
      ></AppPicker>
    </Screen>
  );
}
const containerStyle = { backgroundColor: "orange" };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
