import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

// Assuming you have the image in your project's assets folder
const luisFoto = require('../../assets/luisfoto.jpeg');

export default function Notification({ navigation, notificationId }) {
  return (
    <View style={styles.container}>
      <View style={styles.notificationContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen", {userId: 3720738})}>
          <View style={styles.profilePhotoContainer}>
            <Image
              style={styles.profilePhoto}
              source={luisFoto}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.notificationText}>Elon Musk comentou "ufheifheo hfihi hfioeh hfie fhihf ihefh ihfeifhe ihfioh ihfiheifhio hfioeh ioefhioehfiohe iehifehi"</Text>
      </View>
      <Text style={styles.timeNotification}>há 2 min</Text>
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
  profilePhoto: {
    width: 32,
    height: 32,
    borderRadius: 16,
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
