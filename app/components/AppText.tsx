import React from 'react'
import { Text } from 'react-native'

import defaultStyles from "../config/styles";

interface AppTextProps {
  children?: any;
  style?: object;
  otherProps?: string[];
}

const AppText: React.FC<AppTextProps> = ({
  children,
  style,
  ...otherProps
}) => {
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
