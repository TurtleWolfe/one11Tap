import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import AppText from "./AppText";

import defaultStyles from "../config/styles";
interface PickerItemProps {
  item?: any;
  onPress?: any;
}

const PickerItem: React.FC<PickerItemProps> = ({
  item,
  onPress,
}) => {
  // const PickerItem = ({ item, onPress
  //  }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  )
}

export default PickerItem

const styles = StyleSheet.create({
  text: {
    padding: 20,
    color: defaultStyles.colors.mediumGrey,
  },
})
