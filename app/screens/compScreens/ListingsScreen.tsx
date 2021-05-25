import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import AppCard from "../../components/AppCard";
import Screen from "./Screen";
import colors from "../../../constants/Colors";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../../assets/Supplementary/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../../assets/Supplementary/couch.jpg"),
  },
  {
    id: 3,
    title: "Wolfe in Turtle's clothing",
    price: 5000,
    image: require("../../assets/Supplementary/Turtlewolfe.png"),
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
    backgroundColor: colors.medium,
  },
})
