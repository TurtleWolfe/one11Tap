import React from 'react'
import { StyleSheet, View } from 'react-native'

import colors from "../../../constants/Colors";

const ListItemSeparator = () => {
  return (
    <View style={styles.separator} />
  )
}

export default ListItemSeparator

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.lightGrey,
    // backgroundColor: 'red',
    // margin: 4,
  },
})
