import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetails(props) {
  return (
    <View>
      <Image source={require("../assets/rubik.png")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Rubik cube for sale</AppText>
        <AppText style={styles.price}>$130</AppText>
        <ListItem
          image={require("../assets/poster.png")}
          title="Known Company"
          subTitle="10 Items posted"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});
export default ListingDetails;
