import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function Comment({ navigation, commentInfo }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{flex: 1, overflow: 'hidden'}} onPress={() => navigation.navigate("ProfileScreen", { userId: 77287382 })}>
          <View style={styles.profileContainer}>
            <View style={styles.profilePhotoContainer}>
              <Image 
                style={styles.profileProto}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_wBNgIithcAFRt-Esqz467LbAUaO-9-Vwmg&s' }}
              />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName} numberOfLines={1} >Pedro Henrique</Text>
            </View>
          </View>
        </TouchableOpacity>
        <Text style={styles.commentDate}>há 2 min</Text>
      </View>
      <View style={styles.commentContainer}>
        <Text style={styles.commentText}>
          {commentInfo.text}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  header: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    gap: 10,
    flex: 1,
  },
  profilePhotoContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  profileProto: {
    flex: 1,
    borderRadius: 20,
  },
  profileInfo: {
    height: 32,
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
  },
  commentDate: {
    fontSize: 16,
    color: '#444',
  },
  commentContainer: {
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  commentText: {
    fontSize: 18,
    color: '#222',
  }
});
