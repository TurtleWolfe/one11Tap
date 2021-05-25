import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../../constants/Colors'


const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={require("../assets/Supplementary/chair.jpg")}
        style={styles.image}
      />
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons
          name='close'
          color='white'
          size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name='trash-can-outline'
          color='white'
          size={35} />
      </View>
    </View>
  )
}

export default ViewImageScreen

const styles = StyleSheet.create({
  closeIcon: {
    // width: 50,
    // height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
    width: '100%',
    height: '100%',
  },
  deleteIcon: {
    // width: 50,
    // height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})
