import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import colors from "../../../constants/Colors";

import AppIcon from "../../components/AppIcon";
import ListItem from "../../components/lists/ListItem";
import ListItemSeparatorComponent from "../../components/lists/ListItemSeparator";
import Screen from "./Screen";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
  {
    title: "My Cosmetics",
    subTitle: "subTitle Optional",
    icon: {
      name: "lipstick",
      backgroundColor: colors.black,
    },
  },
];

const AccountScreen = () => {
  return (

    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Super Model"
          subTitle="MyEmail@gmail.com"
          image={require("../../assets/resources/models/model00.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparatorComponent}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subTitle={item.subTitle}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<AppIcon name="logout" backgroundColor={colors.fuchsia} />}
      />
    </Screen>

  )
}

export default AccountScreen

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.greyGrey,
  },
  container: {
    // marginVertical: 20,
    marginBottom: 20,
  },
})
