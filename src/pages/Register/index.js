import React from "react";
import  { View, Text, StyleSheet } from 'react-native';

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Página Register</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold'
  }
})