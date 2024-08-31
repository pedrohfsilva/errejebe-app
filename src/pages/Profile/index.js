import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import Post from '../../components/Post';
import EditButton from '../../components/EditButton';
import { IP_PROVISORIO } from '@env';

export default function Profile({ navigation, route }) {
  const { userId } = route.params
  const [posts, setPosts] = useState([]);
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  async function loadData() {
    setLoading(true);
    try {
      const [userResponse, postsResponse] = await Promise.all([
        fetch(`http://${IP_PROVISORIO}/api/users/${userId}`),
        fetch(`http://${IP_PROVISORIO}/api/postsByUser/${userId}`)
      ]);
  
      const profileJson = await userResponse.json();
      const postsJson = await postsResponse.json();
  
      setProfileData(profileJson);
      setPosts(postsJson);
    } catch (error) {
      console.error('Error refreshing data: ', error);
    } finally {
      setLoading(false);
    }
  }

  async function loadPosts() {
    setLoadingPosts(true);
    try {
      const response = await fetch(`http://${IP_PROVISORIO}/api/posts`);
      if (!response.ok) {
        throw new Error('Erro ao carregar posts do usuário');
      }

      const json = await response.json();
      setPosts(json);
    } catch (error) {
      console.error('Erro ao buscar dados: ', error);
    } finally {
      setLoadingPosts(false);
    }
  };

  useEffect(() => {
    loadData()
  }, [userId]);
  
  async function handleRefresh() {
    setRefreshing(true);
    try {
      const [userResponse, postsResponse] = await Promise.all([
        fetch(`http://${IP_PROVISORIO}/api/users/${userId}`),
        fetch(`http://${IP_PROVISORIO}/api/postsByUser/${userId}`)
      ]);
  
      const profileJson = await userResponse.json();
      const postsJson = await postsResponse.json();
  
      setProfileData(profileJson);
      setPosts(postsJson);
    } catch (error) {
      console.error('Error refreshing data: ', error);
    } finally {
      setRefreshing(false);
    }
  }

  const renderHeader = () => {
    if(!profileData) {
      return null
    }

    return (
      <View style={styles.container}>
        <View style={styles.profileInfoContainer}>
          <View style={styles.profilePhotoContainer}>
            <Image 
              style={styles.profilePhoto}
              source={{ uri: `http://${IP_PROVISORIO}/${profileData.imageSrc}` }}
            />
          </View>
          <Text style={styles.profileName} numberOfLines={1}>{profileData.name}</Text>
          <Text style={styles.profileInfo} numberOfLines={1}>{profileData.positionCompany}</Text>
          <Text style={styles.publicationsText}>Publicações</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      { loading ? (
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
    backgroundColor: "#ddd",
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
})