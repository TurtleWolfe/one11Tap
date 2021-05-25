# [ReactNativeFieldGuide](https://docs.expo.io/guides/userinterface/ 'User Interface Component Libraries')

[React Native Elements](https://react-native-training.github.io/react-native-elements/ 'updated: 02-01-2021, users 77.9k') & [docs](https://react-native-training.github.io/react-native-elements/docs/getting_started.html 'docs') 77.9k

[Native Base](https://nativebase.io/ 'updated: 01-27-2021, users 52.3k') & [docs](https://docs.nativebase.io/ 'docs') 52.3k

[React Native Paper](https://github.com/callstack/react-native-paper 'updated: 01-22-2021, users 31.2k') & [docs](https://callstack.github.io/react-native-paper/index.html 'docs') 31.2k

[React Native Material UI](https://github.com/xotahal/react-native-material-ui 'updated: 04-19-2019, users 2.5k') & [docs](https://github.com/xotahal/react-native-material-ui/blob/master/docs/GettingStarted.md 'docs') 2.5k

[React Native UI Kitten](https://akveo.github.io/react-native-ui-kitten/#/home 'updated: 09-08-2020, users 2k') & [docs](https://akveo.github.io/react-native-ui-kitten/#/docs/quick-start/getting-started 'docs') 2k

[React Native UI Lib](https://github.com/wix/react-native-ui-lib 'updated: 02-05-2021, users 997') & [docs](https://wix.github.io/react-native-ui-lib/ 'docs') 997

[React Native iOS Kit](https://github.com/callstack/react-native-ios-kit 'updated: 011-05-2020, users 58') & [docs](https://callstack.github.io/react-native-ios-kit/docs/installation.html 'docs') 58

```bash
expo init --template expo-template-tabs@sdk-40 --npm

 4  app.json
    hooks/useCachedResources.ts
 2  navigation/BottomTabNavigator.tsx
    navigation/index.tsx
    ../ components/EditScreenInfo.tsx -> app/components/EditScreenInfo.tsx
 2  ../ components/Themed.tsx -> app/components/Themed.tsx

expo install react-native-elements
# (may not be necessary)
# expo install expo-font
# expo install react-native-elements expo-font
expo install expo-app-loading

npm install @react-native-community/hooks
```

## [The Ultimate React Native Series:](https://codewithmosh.com/courses/887220/ 'Mosh HameDani')

[Mastering React (13-hour Course):](https://codewithmosh.com/p/mastering-react 'Mastering React (13-hour Course):')  
[React Tutorial on YouTube (2-hour Course):](https://youtu.be/Ke90Tje7VS0 'React Tutorial on YouTube (2-hour Course): ')  
[http://forum.codewithmosh.com/](http://forum.codewithmosh.com/ '3- If you still cannot proceed, try our forums. Im not personally able to answer the questions due to the large number of students and messages. Post your questions on our forums and participate in discussions to help each other. Answering questions helps you better learn and understand the materials.')  
[https://docs.expo.io/workflow/ios-simulator/](https://docs.expo.io/workflow/ios-simulator/ 'Heres the link to the official instructions for setting up an iOS simulator. It also includes troubleshooting tips. If you encounter any errors, be sure to check this page. ')  
`CNTRL D` & `CMND D`
exp//192:68.0.14:19000  
[https://docs.expo.io/workflow/android-studio-emulator/](https://docs.expo.io/workflow/android-studio-emulator/ 'Heres the link to the official instructions for setting up an Android Virtual Device. If you encounter any issues, be sure to check this page for updated instructions: ')  
`CNTRL M` (windows) or `CMND M` (mac)

### [Fundamental Concepts #2 Text](https://codewithmosh.com/courses/887220/lectures/16617397 'const handlePress = () => console.log()')

onPress={handlePress}

<!-- [Fundamental Concepts #6 Button](https://codewithmosh.com/courses/887220/lectures/16617561 'rnsf Functional Component') -->

[Fundamental Concepts #8 StyleSheet](https://codewithmosh.com/courses/887220/lectures/16617395 '3:21 merge styles')  
[Fundamental Concepts #9 PlatForm](https://codewithmosh.com/courses/887220/lectures/16617395 '2:00 Platform.OS === "android" ? StatusBar.currentHeight : 0,')

### [Layout #2 Dimensions](https://codewithmosh.com/courses/887220/lectures/16617488 'Dimensions.get("screen")')

[Layout #3 Detecting Orentation Changes](https://www.google.com 'useDimensions & useDeviceOrentation')  
`CNTRL or CMND` (left & right arrows)  
[react-native-community/hooks](https://github.com/react-native-community/hooks#usecameraroll '2:00 hooks, useCamerRoll')  
`npm install @react-native-community/hooks`  
[Layout #4 FlexBox](https://www.google.com 'Alt Shift Down Arrow to copy code 2:00')  
[Layout #5 FlexBox -Direction](https://www.google.com '1:23 Control Space')  
[Layout #6 Flexbox-justifyContent](https://codewithmosh.com/courses/887220/lectures/16617484 '1:43 justifyContent: "space-evenly"')  
[Layout #7 Flexbox-alignContent](https://codewithmosh.com/courses/887220/lectures/16617480 '2:33 alignContent: "center"')

### [Styles #5 Styling Texts](https://codewithmosh.com/courses/887220/lectures/16617561 'expo install expo-font (OTF)')

[https://github.com/react-native-training/react-native-fonts](https://github.com/react-native-training/react-native-fonts 'List of system fonts on iOS and Android:')  
[Styles #6 Encapsulating Styles](https://codewithmosh.com/courses/887220/lectures/16617561 'rnsf Functional Component  imrn  2:00 {children} rnss - rn-stylesheet')  
[https://icons.expo.fyi/](https://icons.expo.fyi/ 'expo.github.io/vector-icons/')  
[Styles #8 Platform-Specific](https://codewithmosh.com/courses/887220/lectures/16617555 '...Platform (spread  2:00)')  
[Styles #12 Improving the Welcome Screen](https://codewithmosh.com/courses/887220/lectures/16617564 '4:00 style={[styles.button, { backgroundColor: colors[color] }]}')  
[Styles #13 Card Component](https://codewithmosh.com/courses/887220/lectures/16617550 'rnsf 4:00 {destructuring} 6:00 {require} 8:00 style={[styles.text, style]} 9:30 {overflow}')

### [Lists #3 Extracting the Screen Component](https://codewithmosh.com/courses/887220/lectures/16687902 'paddingTop: Constants.statusBarHeight,')

[Lists #5 Handling Selections](https://codewithmosh.com/courses/887220/lectures/16687899 '2:05 onPress={onPress}')  
[Lists #6 Handling Swipes](https://codewithmosh.com/courses/887220/lectures/16687906 '2:25 Swipeable renderRightActions={renderRightActions} 3:38 returns a view')  
[Lists #7 Deleting an Item](https://codewithmosh.com/courses/887220/lectures/16687900 '0:45 renderRightActions={() => ( </ListItemDeleteAction onPress={() => handleDelete(item)} /> )} 3:30 { useState }')  
[Lists #8 Implementing Pull to Refresh](https://codewithmosh.com/courses/887220/lectures/16687895 '0:45 const [refreshing, setRefreshing] = useState(false);')  
[Lists #12 Extending the ListItem Component](https://codewithmosh.com/courses/887220/lectures/16687905 '1:15 Conditional rendering {image && </Image style={styles.image} source={image} />}')  
[Lists #13 Building the Account Screen](https://codewithmosh.com/courses/887220/lectures/16687953 '7:15 merging prop styles, style={[styles.screen, style] 8:00 breaks rule for re-usablity')  
[Lists #14 Building the Listings Screen](https://codewithmosh.com/courses/887220/lectures/16687954 '3:15 subTitle={"$" + item.price} 5:00  </View style={style}>{children}</>')

### [Input Components # 3 Building a Pretty TextInput](https://codewithmosh.com/courses/887220/lectures/16762423 '3:15 conditional icon, 5:00 destructuring ({ icon, ...otherProps })')

[Input Components #4 Extracting the Default Styles](https://codewithmosh.com/courses/887220/lectures/16762425 '2:00 style={defaultStyles.text} 3:00 defaultStyles.colors.lightGrey,')  
[Input Components #6 Picker](https://codewithmosh.com/courses/887220/lectures/16762419 'expo install @react-native-community/datetimepicker')

### [Forms #2 Building the Login Form](https://codewithmosh.com/courses/887220/lectures/16762473 '6:30 onChangeText={text => setEmail(text)}')

[Forms #3 Building Better Forms with Formik](https://codewithmosh.com/courses/887220/lectures/16762478 'npm i formik')  
[Forms #4 Form Validation with Yup](https://codewithmosh.com/courses/887220/lectures/16762471 'npm i yup 2:30 Yup.matches()')  
[Forms #7 Building the Field Component](https://codewithmosh.com/courses/887220/lectures/16762484 '4:30 spread operator')  
[Forms #9 Building the Form Component](https://codewithmosh.com/courses/887220/lectures/16762474 '1:30 {() => <>{children}</>}')  
[Forms #10 Organizing Components](https://codewithmosh.com/courses/887220/lectures/16762480 'moving to a forms folder')

https://blog.logrocket.com/react-native-form-validations-with-formik-and-yup/

### [ImproveMents #3 Handling Long Text](https://codewithmosh.com/courses/887220/lectures/16762519 '1:00 spread additonal props')

[ImproveMents #8 Building the CategoryPickerItem Component](https://codewithmosh.com/courses/887220/lectures/16762523 '4:35 FlatList numColumns={3} 6:00 numberOfColumns')

## [Part 2:](https://codewithmosh.com/courses/955852/ 'Mosh HameDani')

### [Native Features #6 Encapsulating Styles](https://codewithmosh.com/courses/955852/lectures/17711043 '2:00 expo install expo-image-picker')

[Native Features #6 Encapsulating Styles](https://codewithmosh.com/courses/887220/lectures/16617561 'rnsf Functional Component')  
[Native Features #6 Encapsulating Styles](https://codewithmosh.com/courses/887220/lectures/16617561 'rnsf Functional Component')  
[Native Features #6 Encapsulating Styles](https://codewithmosh.com/courses/887220/lectures/16617561 'rnsf Functional Component')  
[Native Features #6 Encapsulating Styles](https://codewithmosh.com/courses/887220/lectures/16617561 'rnsf Functional Component')  
[Native Features #6 Encapsulating Styles](https://codewithmosh.com/courses/887220/lectures/16617561 'rnsf Functional Component')  
[Native Features #6 Encapsulating Styles](https://codewithmosh.com/courses/887220/lectures/16617561 'rnsf Functional Component')  
[Native Features #6 Encapsulating Styles](https://codewithmosh.com/courses/887220/lectures/16617561 'rnsf Functional Component')  
[Native Features #6 Encapsulating Styles](https://codewithmosh.com/courses/887220/lectures/16617561 'rnsf Functional Component')

[Uploading Apps to the Apple App Store and Google Play](https://docs.expo.io/distribution/uploading-apps/ 'Uploading Apps to the Apple App Store and Google Play')  
[Overview](https://docs.expo.io/distribution/introduction/ 'Overview')  
[https://fastlane.tools/](https://fastlane.tools/ 'App automation done right')  
[blog.expo.io/automating-standalone-expo-app-builds-and-deployments-with-fastlane-exp-and-exptool](https://blog.expo.io/automating-standalone-expo-app-builds-and-deployments-with-fastlane-exp-and-exptool-9b2f5ad0a2cd 'Automating Standalone Expo App Builds and Deployments with Fastlane and Expo CLI')  
[I'm an inline-style link with title](https://www.google.com "Google's Homepage")  
[I'm an inline-style link with title](https://www.google.com "Google's Homepage")
