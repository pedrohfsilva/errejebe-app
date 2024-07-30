import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function PublishButton({ handlePress }) {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Publicar</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#0168BC',
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  }
});
