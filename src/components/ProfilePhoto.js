import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function ProfilePhoto({ size, color }) {
  return (
    <View style={[styles.container, { height: size, width: size, borderColor: color, borderRadius: size / 2 }]}>
      <Image
        style={[styles.image, { height: size, width: size, borderRadius: size / 2 }]}
        source={{ uri: 'https://media.licdn.com/dms/image/D4E03AQGeL9G0MYulLQ/profile-displayphoto-shrink_200_200/0/1699324249256?e=2147483647&v=beta&t=qPDmZCJdwLRzWraYIU9VBUJGs7gwCF4WeclrayNY3-s' }}
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
