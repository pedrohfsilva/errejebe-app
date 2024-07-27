import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Font from 'expo-font';
import { Inder_400Regular } from '@expo-google-fonts/inder';
import AppLoading from 'expo-app-loading';

// Get the device's width
const { width } = Dimensions.get('window');

const Logo = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      Inder_400Regular,
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
    fontFamily: 'Inder_400Regular',
  },
});

export default Logo;
