import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'

export default function ProfileSearch({ navigation, userInfo }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{flex: 1, overflow: 'hidden'}} onPress={() => navigation.navigate("ProfileScreen", {userId: 87387283})} >
        <View style={styles.profileContainer}>
          <View style={styles.profilePhotoContainer}>
            <Image 
              style={styles.profileProto}
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_wBNgIithcAFRt-Esqz467LbAUaO-9-Vwmg&s' }}
            />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName} numberOfLines={1} >{userInfo.name}</Text>
            <Text style={styles.profileCareer} numberOfLines={1}>{userInfo.positionCompany}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  profileContainer: {
    flexDirection: 'row',
    gap: 10,
    flex: 1,
  },
  profilePhotoContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  profileProto: {
    flex: 1,
    borderRadius: 24,
  },
  profileInfo: {
    height: 48,
    justifyContent: 'space-between',
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
  },
  profileCareer: {
    fontSize: 16,
    color: '#444',
  },
  postDate: {
    fontSize: 16,
    color: '#444',
  },
  post: {
    width: '100%',
    backgroundColor: "#eee",
  },
  postImageContainer: {
    width: '100%',
  },
  postImage: {
    width: '100%',
    aspectRatio: 1.5
  },
  postTextContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  postText: {
    fontSize: 20,
    color: '#222',
  },
  footer: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  likeButton: {

  },
  commentsButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  commentsText: {
    fontSize: 20,
    fontWeight: 'semibold',
    color: '#0168BC',
  }
});
