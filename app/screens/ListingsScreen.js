import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import { FlatList, StyleSheet } from "react-native";
import ActivityIndicator from "../components/ActivityIndicator";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);
  useEffect(() => {
    getListingsApi.request(1);
  }, []);

  return (
    <Screen style={styles.screen}>
      <ActivityIndicator visible={getListingsApi.loading}></ActivityIndicator>
      {getListingsApi.error && (
        <>
          <AppText>
            Sorry, not able to fetch the listings from backend API.
          </AppText>
          <AppButton title="Retry" onPress={getListingsApi.loadListings} />
        </>
      )}
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
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
