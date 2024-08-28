import { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons'

import Comment from "../../components/Comment";

export default function Comments({ navigation, route }) {
  const { commentsInfo } = route.params;
  const { loading, setLoading } = useState(false)

  const [commentText, setCommentText] = useState('');

  function handleSendComment() {
    if (commentText === '') {
      alert('Escreva algo para enviar');
    } else {
      alert("Comentário enviado: " + commentText);
      setCommentText('');
    }
  }

  const renderHeader = () => {
    return (
      <View>
        <View style={styles.postContainer}>
          <View style={styles.header}>
            <TouchableOpacity style={{ flex: 1, overflow: 'hidden' }} onPress={() => navigation.navigate("ProfileScreen", { userId: 737237 })} >
              <View style={styles.profileContainer}>
                <View style={styles.profilePhotoContainer}>
                  <Image
                    style={styles.profileProto}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_wBNgIithcAFRt-Esqz467LbAUaO-9-Vwmg&s' }}
                  />
                </View>
                <View style={styles.profileInfo}>
                  <Text style={styles.profileName} numberOfLines={1}>Pedro Henrique Ferreira Silva Pedro Henrique Ferreira Silva</Text>
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
                source={{ uri: 'https://saocarlos.usp.br/wp-content/uploads/2021/10/ICMC-abre-vagas-para-p%C3%B3s-gradua%C3%A7%C3%A3o-em-Ci%C3%AAncias-de-Computa%C3%A7%C3%A3o-e-Matem%C3%A1tica-Computacional.jpg' }}
              />
            </View>
            <View style={styles.postTextContainer}>
              <Text style={styles.postText}>As férias estão acabando</Text>
            </View>
          </View>
        </View>
        <View style={styles.commentInputContainer}>
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
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={commentsInfo}
          keyExtractor={item => item._id.toString()}
          renderItem={({ item }) => (
            <Comment navigation={navigation} commentInfo={item} />
          )}
          ListHeaderComponent={renderHeader}
          ListEmptyComponent={() => (
            <Text style={styles.commentsText}>Nenhum comentário</Text>
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
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
  commentInputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  commentInput: {
    flex: 1,
    color: '#222',
    fontSize: 20
  },
  sendCommentButton: {

  },
  commentsContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  commentsText: {
    fontSize: 18,
    color: '#444',
    textAlign: 'center',
  }
})
