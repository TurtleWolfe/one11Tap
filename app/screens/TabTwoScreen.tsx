import * as React from 'react';
import { StyleSheet } from 'react-native';

import defaultStyles from "../config/styles";

// import ListingsScreen from './compScreens/ListingsScreen';
import MessagesScreen from '../screens/compScreens/MessagesScreen';
// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      {/* <ListingsScreen /> */}
      <MessagesScreen />
      {/* <Text style={styles.title}>Cart</Text> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
