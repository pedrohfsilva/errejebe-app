import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'

export default function Post({ navigation, postInfo }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{flex: 1, overflow: 'hidden'}} onPress={() => navigation.navigate("ProfileScreen", {userId: 87387283})} >
          <View style={styles.profileContainer}>
            <View style={styles.profilePhotoContainer}>
              <Image 
                style={styles.profileProto}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_wBNgIithcAFRt-Esqz467LbAUaO-9-Vwmg&s' }}
              />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName} numberOfLines={1} >Pedro Henrique Ferreira Silva Pedro Henrique Ferreira Silva</Text>
              <Text style={styles.profileCareer} numberOfLines={1}>Membro trainee</Text>
            </View>
          </View>
        </TouchableOpacity>
        <Text style={styles.postDate}>há 2 min</Text>
      </View>
      <View style={styles.post}>
        <View style={styles.postImageContainer}>
          <Image 
            style={styles.postImage} 
            source={{ uri: 'https://saocarlos.usp.br/wp-content/uploads/2021/10/ICMC-abre-vagas-para-p%C3%B3s-gradua%C3%A7%C3%A3o-em-Ci%C3%AAncias-de-Computa%C3%A7%C3%A3o-e-Matem%C3%A1tica-Computacional.jpg'}}
          />
        </View>
        <View style={styles.postTextContainer}>
          <Text style={styles.postText}>{postInfo.text}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <View style={styles.likeButton}>
            <Feather name="thumbs-up" size={25} color="#0168BC" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CommentsScreen", { commentsInfo: postInfo.comments })}>
          <View style={styles.commentsButton}>
            <Text style={styles.commentsText}>Comentários</Text>
          </View>
        </TouchableOpacity> 
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
    alignItems: 'flex-start',
    gap: 10,
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
    aspectRatio: 1
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
