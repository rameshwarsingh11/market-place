import React from "react";
import Screen from "../components/Screen";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Rubik cube for sale",
    price: 88,
    image: require("../assets/rubik.png"),
  },
  {
    id: 1,
    title: "AI 3D poster for sale",
    price: 160,
    image: require("../assets/poster.png"),
  },
];
function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      ></FlatList>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
export default ListingsScreen;
