import { useState } from "react"
import  { View, Text, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, TextInput, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons'

import Button from "../../components/Button"

export default function Home({ navigation }) {
  function handleLoadImage() {
    alert("Carregar imagem");
  }

  function handlePublish() {
    if(postText == '') {
      alert("Escreva algo antes de publicar")
    } else {
      alert("Publicado: " + postText);
    }
  }

  const [postText, setPostText] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
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
        <View style={styles.loadImageContainer}>
          <TouchableOpacity onPress={handleLoadImage}>
            <View style={styles.loadImageButton}>
              <Feather name="plus-circle" size={60} color="#0168BCbb" />
              <Text style={styles.loadImageText}>Carregar imagem</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.postTextInputContainer}>
          <TextInput 
            style={styles.postTextInput} 
            onChangeText={setPostText}
            value={postText}
            multiline={true}
            placeholder="Escreva algo"
          />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer} >
        <Button buttonText="Publicar" handlePress={handlePublish} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100vh',
    backgroundColor: '#fff',
    position: 'relative',
  },
  profileContainer: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    gap: 10,
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
  loadImageContainer: {
    width: '100%',
    aspectRatio: 1.5,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadImageButton: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  loadImageText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0168BCbb'
  },
  postTextInputContainer: {
    width: '100%',
    backgroundColor: '#eee',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  postTextInput: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 20,
    color: '#222',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 15,
    position: 'absolute',
    bottom: 0,
  }
})