import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { IP_PROVISORIO } from '@env';
import timeAgo from '../utils/time';

export default function Notification({ navigation, notificationInfo }) {
  return (
    <View style={styles.container}>
      <View style={styles.notificationContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen", {userId: notificationInfo.user._id})}>
          <View style={styles.profilePhotoContainer}>
            <Image
              style={styles.profilePhoto}
              source={{ uri: `http://${IP_PROVISORIO}/${notificationInfo.user.imageSrc}` }}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.notificationText}>{notificationInfo.user.name} {notificationInfo.text}</Text>
      </View>
      <Text style={styles.timeNotification}>{timeAgo(notificationInfo.createdAt)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'flex-start',
    gap: 10,
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
    gap: 10,
  },
  profilePhotoContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  profilePhoto: {
    width: '100%',
    height: '100%',
    borderRadius: 16
  },
  notificationText: {
    fontSize: 18,
    color: '#444',
    flex: 1,
  },
  timeNotification: {
    color: '#444',
    fontSize: 15,
  },
});
