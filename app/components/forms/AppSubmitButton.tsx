import React from 'react'
import { useFormikContext } from "formik";

import AppButton from "../AppButton";
// import { StyleSheet, Text, View } from 'react-native'

const AppSubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();


  return <AppButton title={title} onPress={handleSubmit} />
}

export default AppSubmitButton

// const styles = StyleSheet.create({})
