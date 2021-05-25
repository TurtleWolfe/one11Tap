import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import colors from '../../../constants/Colors'
import AppText from '../../components/AppText'
import ListItem from "../../components/lists/ListItem";

const ListingDetailsScreen = () => {
  return (
    <View style={styles.view}>
      <Image
        style={styles.image}
        source={require("../assets/Supplementary/jacket.jpg")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/Supplementary/Turtlewolfe.png")}
            title="TurtleWolfe"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  )
}

export default ListingDetailsScreen

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    // resizeMode: 'cover',
    width: "100%",
    // width: 300,
    height: 250,
  },
  view: {
    flex: 1,
    // resizeMode: 'center',
    width: "100%",
    // width: 300,
    // height: 200,
  },
  price: {
    fontFamily: "CharterBoldItalic",
    color: colors.secondary,
    fontWeight: "600",
    // fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontFamily: "CharterBold",
    fontSize: 24,
    fontWeight: "600",
    // fontWeight: "bold",
  },
  userContainer: {
    marginVertical: 7,
  },
})
