import React from 'react'
// import { Platform, StyleSheet, Text } from 'react-native'
import { Text } from 'react-native'

import defaultStyles from "../config/styles";

const AppText = ({ children, style, ...otherProps }) => {
  return (
    <Text style={[defaultStyles.text, style]}{...otherProps}>
      { children}
    </Text >
  )
}

export default AppText

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 18,
//     // fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
//     fontFamily: "CharterRegular",
//   },
// })
