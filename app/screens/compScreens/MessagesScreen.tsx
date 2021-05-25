import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import Screen from "./Screen";
// import Constants from "expo-constants";
import ListItem from "../../components/lists/ListItem";
import ListItemSeparator from "../../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../../components/lists/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../../assets/Supplementary/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../../assets/Supplementary/Turtlewolfe.png"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen style={styles.zcreen} >
      {/* <View {styles.zcreen} > */}
      <FlatList
        // style={styles.zcreen}
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae posuere leo. Fusce mattis nec dolor ut bibendum.",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae posuere leo. Fusce mattis nec dolor ut bibendum. Sed pulvinar turpis nibh. Pellentesque sem quam, posuere nec semper nec, efficitur sed arcu. Quisque mattis eleifend dui, et dapibus sem consequat sed. Aenean et quam ultrices, condimentum massa et, viverra ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed dui nulla, cursus quis ligula at, laoreet mollis turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut et tempor libero. Proin eu velit eget quam gravida varius. Vestibulum ante odio, mattis. ",
              image: require("../../assets/Supplementary/Turtlewolfe.png"),
            },
          ]);
        }}
      />
      {/* </View> */}
    </Screen>
  )
}

export default MessagesScreen

const styles = StyleSheet.create({
  zcreen: {
    // paddingTop: Constants.statusBarHeight,
    flex: 1,
    // backgroundColor: "pink",
    // width: "40%",
    // width: 130,
    // alignItems: 'center',
    // justifyContent: "center",
  },
})
