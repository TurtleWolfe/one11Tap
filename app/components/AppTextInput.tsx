import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

interface AppTextInputProps {
  icon?: string;
  width?: string;
  otherProps?: string[];
}

const AppTextInput: React.FC<AppTextInputProps> = ({
  icon,
  width = "100%",
  ...otherProps
}) => {
  // const AppTextInput = ({ icon, width = "100%", ...otherProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.mediumGrey}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  )
}

export default AppTextInput

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.greyGrey,
    borderRadius: 25,
    flexDirection: "row",
    // width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
})
