import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function ProfilePhoto({ size, color }) {
  return (
    <View style={[styles.container, { height: size, width: size, borderColor: color, borderRadius: size / 2 }]}>
      <Image
        style={[styles.image, { height: size, width: size, borderRadius: size / 2 }]}
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_wBNgIithcAFRt-Esqz467LbAUaO-9-Vwmg&s' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    overflow: 'hidden'
  },
  image: {
    resizeMode: 'cover',
  },
});
