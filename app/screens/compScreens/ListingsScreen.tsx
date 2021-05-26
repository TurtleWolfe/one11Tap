import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import AppCard from "../../components/AppCard";
import Screen from "./Screen";
import colors from "../../../constants/Colors";

const listings = [
  {
    id: 1,
    title: "Foundation",
    price: 10,
    image: require("../../assets/resources/cosmetics/eggBottle200.png"),
  },
  {
    id: 2,
    title: "Compact",
    price: 200,
    image: require("../../assets/resources/cosmetics/foundation200.png"),
  },
  {
    id: 3,
    title: "LipStick",
    price: 3000,
    image: require("../../assets/resources/cosmetics/lipstick200.png"),
  },
];

const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  )
}

export default ListingsScreen

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.greyGrey,
  },
})
