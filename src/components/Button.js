import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function Button({ handlePress, buttonText }) {
  return (
    <TouchableOpacity onPress={handlePress} >
      <View style={styles.button}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 300,
    backgroundColor: '#0168BC',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  buttonText: {
    fontSize: '20',
    fontWeight: 'bold',
    color: '#fff',
  }
});
