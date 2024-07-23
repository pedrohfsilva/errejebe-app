import React from "react";
import  { View, Text, StyleSheet } from 'react-native';

export default function Notifications({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Página Notifications</Text>
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