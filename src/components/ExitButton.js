import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function ExitButton({ handlePress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.button}>
        <Feather name="log-out" size={24} color="#0168BC" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
  button: {
    padding: 8,
  },
});
