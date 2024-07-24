import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

// Assuming you have the image in your project's assets folder
const luisFoto = require('../../assets/luisfoto.jpeg');

export default function Notification() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profilePhotoContainer}>
          <Image
            style={styles.profilePhoto}
            source={luisFoto}
          />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Luis</Text>
          <Text style={styles.notificationText}>curtiu sua postagem</Text>
        </View>
      </View>
      <Text style={styles.timeText}>há 2 min</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profilePhotoContainer: {
    marginRight: 10,
  },
  profilePhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  notificationText: {
    fontSize: 14,
    color: '#555',
  },
  timeText: {
    color: '#999',
    fontSize: 12,
  },
});
