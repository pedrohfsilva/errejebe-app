import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import Button from '../../components/Button';
import Post from '../../components/Post';
import EditButton from '../../components/EditButton';
import { IP_PROVISORIO } from '@env';

// Supondo que você tenha a imagem no diretório de assets do projeto
const luisFoto = require('../../../assets/luisfoto.jpeg');

export default function MyProfile({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      const [userResponse, postsResponse] = await Promise.all([
        fetch(`http://${IP_PROVISORIO}/api/users/66c273176fce2dbc9a3c4083`),
        fetch(`http://${IP_PROVISORIO}/api/postsByUser/66c273176fce2dbc9a3c4083`)
      ]);
  
      const userJson = await userResponse.json();
      const postsJson = await postsResponse.json();
  
      setUser(userJson);
      setPosts(postsJson);
    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setLoading(false);
    }
  }
  
  async function handleRefresh() {
    setRefreshing(true);
    try {
      const [userResponse, postsResponse] = await Promise.all([
        fetch(`http://${IP_PROVISORIO}/api/users/66c273176fce2dbc9a3c4083`),
        fetch(`http://${IP_PROVISORIO}/api/postsByUser/66c273176fce2dbc9a3c4083`)
      ]);
  
      const userJson = await userResponse.json();
      const postsJson = await postsResponse.json();
  
      setUser(userJson);
      setPosts(postsJson);
    } catch (error) {
      console.error('Error refreshing data: ', error);
    } finally {
      setRefreshing(false);
    }
  }  

  useEffect(() => {
    fetchData();
    console.log(user)
  }, []);

  const renderHeader = () => {
    if(!user) {
      return null
    }

    return (
      <View style={styles.container}>
        <View style={styles.profileInfoContainer}>
          <View style={styles.profilePhotoContainer}>
            <Image 
              style={styles.profilePhoto}
              source={luisFoto}
            />
            <View style={styles.editButton}>
              <EditButton
                handlePress={() => navigation.navigate('EditProfileScreen')}
                color={"#0168BC"}
                backgroundColor={"#EEEEEE"}/>
            </View>
          </View>
          <Text style={styles.profileName} numberOfLines={1}>{user.name}</Text>
          <Text style={styles.profileInfo} numberOfLines={1}>{user.positionCompany}</Text>
          <Text style={styles.publicationsText}>Publicações</Text>
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
          style={styles.postsContainer}
          data={posts}
          keyExtractor={item => item._id.toString()}
          renderItem={({ item }) => (
            <Post navigation={navigation} postInfo={item} />
          )}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
          }
          ListHeaderComponent={renderHeader}
          ListEmptyComponent={() => (
            <Text style={styles.postsText}>Nenhum post</Text>
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
    backgroundColor: "#fff"
  },
  postsText: {
    fontSize: 18,
    color: '#444',
    textAlign: 'center',
  }
});
