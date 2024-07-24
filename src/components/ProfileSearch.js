import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'

export default function ProfileSearch({ navigation, postId }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{flex: 1, overflow: 'hidden'}} onPress={() => navigation.navigate("ProfileScreen", {userId: 87387283})} >
        <View style={styles.profileContainer}>
          <View style={styles.profilePhotoContainer}>
            <Image 
              style={styles.profileProto}
              source={{ uri: 'https://media.licdn.com/dms/image/D4E03AQGeL9G0MYulLQ/profile-displayphoto-shrink_200_200/0/1699324249256?e=2147483647&v=beta&t=qPDmZCJdwLRzWraYIU9VBUJGs7gwCF4WeclrayNY3-s' }}
            />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName} numberOfLines={1} >Pedro Henrique Ferreira Silva Pedro Henrique Ferreira Silva</Text>
            <Text style={styles.profileCareer} numberOfLines={1}>Membro trainee</Text>
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
