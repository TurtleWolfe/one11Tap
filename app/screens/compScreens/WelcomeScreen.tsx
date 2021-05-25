import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

// import colors from '../../constants/Colors'
import AppButton from '../../components/AppButton'

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require('../../assets/Supplementary/background.jpg')}
    >
      <View
        style={styles.logoContainer}
      >
        <Image
          style={styles.logo}
          source={require("../../assets/Supplementary/logo-red.png")}
        />
        <Text
          style={styles.tagLine}
        >
          Welcome Screen
      </Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          onPress={() => console.log("login")} />
        <AppButton
          title="Register"
          onPress={() => console.log("register")}
          color="secondary" />
      </View>

    </ImageBackground>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  // loginButton: {
  //   width: "100%",
  //   height: 70,
  //   backgroundColor: colors.primary,
  // },
  // registerButton: {
  //   width: "100%",
  //   height: 70,
  //   backgroundColor: colors.secondary,
  // },
  background: {
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
    padding: 20,
  },
  logo: {
    height: 100,
    width: 100,
    // position: 'absolute',
    // top: 70,
  },
  logoContainer: {
    // height: 100,
    // width: 100,
    alignItems: 'center',
    position: 'absolute',
    top: 70,
  },
  tagLine: {
    // alignContent: 'center',
    color: 'dodgerblue',
    // justifyContent: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    // fontWeight: '600',
    paddingVertical: 20,
  },
})
