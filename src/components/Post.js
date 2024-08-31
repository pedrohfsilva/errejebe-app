import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { IP_PROVISORIO } from '@env'

export default function Post({ navigation, postInfo }) {
  const [liked, setLiked] = useState(postInfo.likes.includes(postInfo.user._id)); // Supondo que você tenha o ID do usuário
  const [likeCount, setLikeCount] = useState(postInfo.likes.length);

  useEffect(() => {
    setLiked(postInfo.likes.includes(postInfo.user._id))
    setLikeCount(postInfo.likes.length)
  }, [postInfo])

  async function handleToggleLike() {
    try {
      const response = await fetch(`http://${IP_PROVISORIO}/api/toggleLike/${postInfo._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: postInfo.user._id }) // Substitua 'id_do_usuario' pelo ID real do usuário
      });

      if (response.ok) {
        const updatedPost = await response.json();

        setLiked(updatedPost.updatedPost.likes.includes(postInfo.user._id));
        setLikeCount(updatedPost.updatedPost.likes.length);
      } else {
        console.error('Erro ao alternar o like');
      }
    } catch (error) {
      console.error('Erro ao alternar o like:', error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{ flex: 1, overflow: 'hidden' }} onPress={() => navigation.navigate("ProfileScreen", { userId: postInfo.user._id })}>
          <View style={styles.profileContainer}>
            <View style={styles.profilePhotoContainer}>
              <Image
                style={styles.profileProto}
                source={{ uri: `http://${IP_PROVISORIO}/${postInfo.user.imageSrc}` }}
              />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName} numberOfLines={1} >{postInfo.user.name}</Text>
              <Text style={styles.profileCareer} numberOfLines={1}>{postInfo.user.positionCompany}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <Text style={styles.postDate}>há 2 min</Text>
      </View>

      {/* Conteúdo do post */}
      <View style={styles.post}>
        <View style={styles.postImageContainer}>
          <Image
            style={styles.postImage}
            source={{ uri: `http://${IP_PROVISORIO}/${postInfo.imageSrc}` }}
          />
        </View>
        <View style={styles.postTextContainer}>
          <Text style={styles.postText}>{postInfo.text}</Text>
        </View>
      </View>

      {/* Rodapé do post */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleToggleLike}>
          <View style={styles.likeButton}>
            <Feather name="thumbs-up" size={25} color={liked ? "#0168BC" : "#444"} />
            <Text style={styles.likeButtonText}>{likeCount}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CommentsScreen", { postInfo: postInfo })}>
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  likeButtonText: {
    fontSize: 18,
    fontWeight: 'semibold'
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
