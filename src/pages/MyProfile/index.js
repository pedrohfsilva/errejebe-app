import React from "react";
import  { View, Text, StyleSheet } from 'react-native';

export default function MyProfile({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Página MyProfile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold'
  }
})