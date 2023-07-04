import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import ListitemSeperator from "../components/ListitemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/poster.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/poster.png"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Item pressed", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          ></ListItem>
        )}
        ItemSeperatorComponent={ListitemSeperator}
      ></FlatList>
    </Screen>
  );
}
const styles = StyleSheet.create({});

export default MessagesScreen;
