import "react-native-gesture-handler";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Screen from "./app/components/Screen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListingsScreen from "./app/screens/ListingsScreen";

const Link = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      title="click"
      onPress={() => {
        navigation.navigate("TweetDetails", { 'id': 1 });
      }}
    ></TouchableOpacity>
  );
};

const Tweets = ({ }) => {
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>
};
const TweetDetails = ({ route }) => {
  <Screen>
    <Text>Tweet Details{route.params.id}</Text>
  </Screen>
};

const Stack = createStackNavigator();
const StackNavigator = () => {
  <Stack.Navigator initialRouteName="Tweets" screenOptions={{
    headerStyle: { backgroundColor: 'red' },
    headerTintColor: 'blue',
  }}>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails}
    />
  </Stack.Navigator>
};

const Account = () => <Screen><Text>Account</Text></Screen>

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  <Tab.Navigator tabBar={{
    backgroundColor: 'red'
  }}>
    <Tab.Screen name='Feed' component={Tweets} />
    <Tab.Screen name='Account' component={Account} />
  </Tab.Navigator>
}

export default function App() {
  return (
    // <NavigationContainer>
    //   <TabNavigator />
    // </NavigationContainer>
    <ListingsScreen />
  );
}
