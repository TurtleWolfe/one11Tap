import * as React from 'react';
import { StyleSheet } from 'react-native';

import defaultStyles from "../config/styles";

// import AppButton from '../components/AppButton';
// import AppCard from '../components/AppCard';
// import AppIcon from '../components/AppIcon';
// import AppPicker from '../components/AppPicker';
// import AppText from '../components/AppText';
// import AppTextInput from '../components/AppTextInput';
// import CategoryPickerItem from '../components/CategoryPickerItem';
// import FancyLogo from '../components/FancyLogo';
// import PickerItem from '../components/PickerItem';
// import AppErrorMessage from '../components/forms/AppErrorMessage';
// import AppForm from '../components/forms/AppForm';
// import AppFormField from '../components/forms/AppFormField';
// import AppFormPicker from '../components/forms/AppFormPicker';
// import AppSubmitButton from '../components/forms/AppSubmitButton';

import ListingEditScreen from '../screens/compScreens/ListingEditScreen';
import ListingsScreen from '../screens/compScreens/ListingsScreen';
import MessagesScreen from '../screens/compScreens/MessagesScreen';
import RegisterScreen from '../screens/compScreens/RegisterScreen';
import EditScreenInfo from '../components/EditScreenInfo';

// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabFiveScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Settings</Text> */}
      {/* <AppButton /> */}
      {/* <AppCard /> */}
      {/* <AppIcon /> */}
      {/* <AppPicker /> */}
      {/* <AppText /> */}
      {/* <AppTextInput /> */}
      {/* <FancyLogo /> */}
      {/* <AppErrorMessage /> */}
      {/* <AppForm /> */}
      {/* <AppFormField /> */}
      {/* <AppFormPicker /> */}
      {/* <AppSubmitButton /> */}
      {/* <MessagesScreen /> */}
      <ListingEditScreen />
      {/* <ListingsScreen /> */}
      {/* <MessagesScreen /> */}
      {/* <RegisterScreen /> */}
      {/* <PickerItem /> */}
      {/* <CategoryPickerItem /> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="/screens/TabFiveScreen.tsx" /> */}
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
