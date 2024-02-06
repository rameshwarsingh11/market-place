import "react-native-gesture-handler";
import React from "react";

import { Button, Text } from "react-native";
import Screen from "./app/components/Screen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="click"
      onPress={() => {
        navigation.navigate("TweetDetails");
      }}
    ></Button>
  );
};

const Tweets = ({ navigation }) => {
  <Screen>
    <Text>Tweets</Text>
    <Button title="View Tweet"
      onPress={() => navigation.navigate('Tweet Details')

      } />
  </Screen>;
};
const TweetDetails = () => {
  <Screen>
    <Text>TweetDetails</Text>
  </Screen>;
};

const Stack = createStackNavigator();
const StackNavigator = () => {
  <Stack.Navigator initialRouteName="Tweets">
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
};
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
