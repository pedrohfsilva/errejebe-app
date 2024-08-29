import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, RefreshControl, ActivityIndicator, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { IP_PROVISORIO } from '@env';

import Comment from '../../components/Comment';

export default function Comments({ navigation, route }) {
  const { postInfo } = route.params;
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(`http://${IP_PROVISORIO}/api/commentsByPost/${postInfo._id}`);
      const json = await response.json();
      setComments(json);
    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setLoading(false);
    }
  };

  async function handleRefresh() {
    setRefreshing(true);
    try {
      const response = await fetch(`http://${IP_PROVISORIO}/api/commentsByPost/${postInfo._id}`);
      const json = await response.json();
      setComments(Array.isArray(json) ? json : []);
    } catch (error) {
      console.error('Error refreshing data: ', error);
    } finally {
      setRefreshing(false);
    }
  }

  useEffect(() => {
    fetchData();
    console.log(postInfo)
  }, []);

  async function handleSendComment() {
    if (commentText === '') {
      alert('Escreva algo para enviar');
      return;
    }

    Keyboard.dismiss();
  
    const newComment = {
      userId: '66cf7747d0a4c54263a8b4ff',
      postId: postInfo._id,
      text: commentText
    };
  
    try {
      const response = await fetch(`http://${IP_PROVISORIO}/api/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newComment)
      });
  
      if (!response.ok) {
        throw new Error('Erro ao enviar o comentário');
      }
  
      const result = await response.json();
      
      setCommentText('');

      handleRefresh();
    } catch (error) {
      console.error('Erro ao enviar o comentário:', error);
      alert('Erro ao enviar o comentário. Tente novamente.');
    }
  }  

  const renderHeader = () => (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <TouchableOpacity style={{ flex: 1, overflow: 'hidden' }} onPress={() => navigation.navigate("ProfileScreen", { userId: postInfo.user._id })}>
          <View style={styles.profileContainer}>
            <View style={styles.profilePhotoContainer}>
              <Image
                style={styles.profileProto}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_wBNgIithcAFRt-Esqz467LbAUaO-9-Vwmg&s' }}
              />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName} numberOfLines={1}>{postInfo.user.name}</Text>
              <Text style={styles.profileCareer} numberOfLines={1}>{postInfo.user.positionCompany}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <Text style={styles.postDate}>há 2 min</Text>
      </View>
      <View style={styles.post}>
        <View style={styles.postImageContainer}>
          <Image
            style={styles.postImage}
            source={{ uri: 'https://saocarlos.usp.br/wp-content/uploads/2021/10/ICMC-abre-vagas-para-p%C3%B3s-gradua%C3%A7%C3%A3o-em-Ci%C3%AAncias-de-Computa%C3%A7%C3%A3o-e-Matem%C3%A1tica-Computacional.jpg' }}
          />
        </View>
        <View style={styles.postTextContainer}>
          <Text style={styles.postText}>{postInfo.text}</Text>
        </View>
      </View>
      <View style={styles.commentsLabelContainer}>
        <Text style={styles.commentLabel}>Comentários</Text>
      </View>
    </View>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <>
            <FlatList
              data={comments}
              keyExtractor={item => item._id.toString()}
              renderItem={({ item }) => (
                <Comment navigation={navigation} commentInfo={item} />
              )}
              ListHeaderComponent={renderHeader}
              ListEmptyComponent={() => (
                <Text style={styles.commentsText}>Nenhum comentário</Text>
              )}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={handleRefresh}
                />
              }
              showsVerticalScrollIndicator={false}
            />
            <View
              style={styles.commentInputContainer}
            >
              <TextInput
                style={styles.commentInput}
                onChangeText={setCommentText}
                value={commentText}
                placeholder="Escreva um comentário"
                placeholderTextColor="#0168BCbb"
                multiline={true}
              />
              <TouchableOpacity onPress={handleSendComment}>
                <View style={styles.sendCommentButton}>
                  <Feather name="send" color="#0168BC" size={25} />
                </View>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    overflow: 'hidden'
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
  commentsLabelContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  commentLabel: {
    fontSize: 16,
    color: "#0168BC"
  },
  commentInputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    left: 0,
    bottom: 0,
    backgroundColor: "#fff",
  },
  commentInput: {
    flex: 1,
    color: '#222',
    fontSize: 20
  },
  sendCommentButton: {

  },
  commentsText: {
    fontSize: 18,
    color: '#444',
    textAlign: 'center',
    marginVertical: 15,
  }
});
