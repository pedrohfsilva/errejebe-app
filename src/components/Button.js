import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function Button({ handlePress, buttonText }) {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    height: 40,
    backgroundColor: '#0168BC',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#0168BC',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  }
});
