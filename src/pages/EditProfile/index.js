import React from "react";
import  { View, Text, StyleSheet, Button } from 'react-native';

export default function EditProfile({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
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