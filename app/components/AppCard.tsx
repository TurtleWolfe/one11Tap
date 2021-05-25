import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import colors from '../../constants/Colors'
import AppText from './AppText'

const AppCard = ({ title, subTitle, image }) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={image} />
      <View style={styles.detailsContainer}>
        <AppText
          numberOfLines={1}
          style={styles.title}>{title}</AppText>
        <AppText
          numberOfLines={2}
          style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  )
}

export default AppCard

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.lightGrey,
    marginBottom: 20,
    overflow: "hidden",
    // width: 360,
    width: "100%",

  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    // width: 360,
    width: "100%",
    height: 200,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: colors.mediumGrey,

  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
})
