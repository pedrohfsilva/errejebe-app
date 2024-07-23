import React from "react";
import  { View, Text, StyleSheet, Button } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Button 
        title="Go to Esqueci a senha"
        onPress={() => navigation.navigate('Redefinir senha')}
      />
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