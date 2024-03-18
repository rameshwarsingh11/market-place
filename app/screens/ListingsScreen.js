import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from '../api/listings'
import AppText from "../components/AppText";
import AppButton from '../components/AppButton'

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings()
    setLoading(false);

    if (!response.ok) {
      setError(true);
      console.log(response.problem);
      return;
    }
    else {
      setError(false);
    }
    setListings(response.data);
  }
  return (
    <Screen style={styles.screen}>
      <ActivityIndicator animating={loading} size='large'></ActivityIndicator>
      {error && <>
        <AppText>Sorry, not able to fetch the listings from backend API.</AppText>
        <AppButton title='Retry' onPress={loadListings} />
      </>
      }
      <FlatList
        data={listings}
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
