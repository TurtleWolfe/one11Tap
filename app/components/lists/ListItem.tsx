import React from 'react'
import {
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "./../AppText";
import colors from "../../../constants/Colors";

const ListItem = ({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={colors.black}
        onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            {title && <AppText
              style={styles.title}
              numberOfLines={1}
            >{title}</AppText>}
            {subTitle && <AppText
              style={styles.subTitle}
              numberOfLines={2}
            >{subTitle}</AppText>}
          </View>
          <MaterialCommunityIcons
            color={colors.mediumGrey}
            name="chevron-right"
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipeable >
  )
}

export default ListItem

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.greyGrey,
    // backgroundColor: colors.secondary,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    // marginRight: 10,
    // backgroundColor: colors.primary,
    backgroundColor: colors.greyGrey,
  },
  subTitle: {
    color: colors.mediumGrey,
    fontFamily: "CharterItalic",
    fontWeight: "600",
  },
  title: {
    fontFamily: "CharterBold",
    fontWeight: "400",
    // fontWeight: "bold",
  },
})
