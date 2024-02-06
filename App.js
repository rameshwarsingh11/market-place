import "react-native-gesture-handler";
import React from "react";

import { Button, Text, TouchableOpacity } from "react-native";
import Screen from "./app/components/Screen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import WelcomeScreen from "./app/screens/WelcomeScreen";

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
  </Screen>;
};
const TweetDetails = ({ route }) => {
  <Screen>
    <Text>Tweet Details{route.params.id}</Text>
  </Screen>;
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
  <Tab.Navigator>
    <Tab.Screen name='Feed' component={Tweets} />
    <Tab.Screen name='Account' component={Account} />
  </Tab.Navigator>
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
