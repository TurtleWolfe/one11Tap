import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import * as Yup from "yup";
// import { Formik } from "formik";

// import AppButton from "../components/AppButton";
// import AppErrorMessage from "../components/AppErrorMessage";
// import AppForm from './forms/AppForm';
// import AppFormField from './forms/AppFormField';
// import AppSubmitButton from './forms/AppSubmitButton';
// import AppText from "../components/AppText";
// import AppTextInput from './AppTextInput';
import Screen from "./Screen";

import { AppForm, AppFormField, AppSubmitButton } from "../../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/images/logo.png")} />

      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          // onBlur={() => setFieldTouched("email")}
          // onChangeText={handleChange("email")}
          placeholder="Email"
          textContentType="emailAddress"
        />
        {/* <AppErrorMessage
              error={errors.email}
              visible={touched.email}
            /> */}
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          // onBlur={() => setFieldTouched("password")}
          // onChangeText={handleChange("password")}
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        {/* <AppErrorMessage
              error={errors.password}
              visible={touched.password}
            /> */}
        <AppSubmitButton
          title="Login"
        />
        {/* <AppButton
              title="Login"
              onPress={handleSubmit}
            /> */}
      </AppForm>

      {/* <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm> */}
    </Screen>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 260,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
})
