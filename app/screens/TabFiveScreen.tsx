import * as React from 'react';
import { StyleSheet } from 'react-native';

import defaultStyles from "../config/styles";

import EditScreenInfo from '../components/EditScreenInfo';

// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabFiveScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabFiveScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: defaultStyles.colors.greyGrey,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: defaultStyles.colors.danger,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
