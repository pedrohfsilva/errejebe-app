import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'

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
    width: '100%',
    backgroundColor: '#0168BC',
    borderRadius: 100,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  }
});
