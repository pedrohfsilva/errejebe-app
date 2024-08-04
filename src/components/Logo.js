import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.errejebe}>ERREJEBE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errejebe: {
    fontSize: 30, // text size
    color: '#0168BC', // text color
  },
});

export default Logo;
