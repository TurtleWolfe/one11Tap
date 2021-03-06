import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import colors from '../../constants/Colors'

interface AppButtonProps {
  color?: string;
  title?: string;
  onPress?: any;
}

const AppButton: React.FC<AppButtonProps> = ({
  color = "primary",
  onPress = () => console.log("default tapped"),
  title = 'default',
}) => {
  return (
    <TouchableOpacity
      style={[styles.button,
      { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default AppButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    color: colors.darkGrey,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }
})







