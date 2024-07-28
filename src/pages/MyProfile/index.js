import React from "react"
import  { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import Button from '../../components/Button'
import Post from '../../components/Post'
import EditButton from '../../components/EditButton'

// Assuming you have the image in your project's assets folder
const luisFoto = require('../../../assets/luisfoto.jpeg');

export default function MyProfile({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
      <View style={styles.profileInfoContainer}>
        <View style={styles.profilePhotoContainer}>
          <Image 
            style={styles.profilePhoto}
            source={luisFoto}
          />
          <View style={styles.editButton}>
            <EditButton
              handlePress={''}
              color={"#0168BC"}
              backgroundColor={"#EEEEEE"}/>
          </View>
        </View>
        <Text style={styles.profileName} numberOfLines={1}>Luíz Henrique</Text>
        <Text style={styles.profileInfo} numberOfLines={1}>Diretor de compras</Text>
        <Text style={styles.publicationsText}>Publicações</Text>
      </View>
      <View style={styles.postsContainer}>
        <Post navigation={navigation} postId={938374} />
        <Post navigation={navigation} postId={938374} />
        <Post navigation={navigation} postId={938374} />
      </View>
      <View>
        <Button
          buttonText="Sair"
          handlePress={() => navigation.navigate('LoginScreen')}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileInfoContainer: {
    width: '100%',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    overflow: 'hidden',
  },
  profilePhotoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePhoto: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 5,
  },
  profileInfo: {
    fontSize: 18,
    color: '#444',
    marginBottom: 20,
  },
  editButton: {
    position: 'absolute',
    left: 150,
    top: 0,
  },
  publicationsText: {
    fontSize: 18,
    color: '#0168BC'
  },
  postsContainer: {
    flex: 1,
  },
})