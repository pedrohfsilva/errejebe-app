import React, {useState, useEffect} from "react"
import  { View, Text, StyleSheet, ScrollView, Image, FlatList } from 'react-native'
import Button from '../../components/Button'
import Post from '../../components/Post'
import EditButton from '../../components/EditButton'

// Assuming you have the image in your project's assets folder
const luisFoto = require('../../../assets/luisfoto.jpeg');

export default function MyProfile({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch('http://172.26.91.18:3000/api/postsByUser/66c26fbf436dc83286acdcd8');
      const json = await response.json();
      setPosts(json);
    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(posts);
  }, []);

  const renderHeader = () => {
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
          <Text style={styles.profileName} numberOfLines={1}>Luíz Henrique</Text>
          <Text style={styles.profileInfo} numberOfLines={1}>Diretor de compras</Text>
          <Text style={styles.publicationsText}>Publicações</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      style={styles.postsContainer}
      data={posts}
      keyExtractor={item => item._id.toString()}
      renderItem={({ item }) => (
        <Post navigation={navigation} postInfo={item} />
      )}
      ListHeaderComponent={renderHeader}
      ListEmptyComponent={() => (
        <Text style={styles.postsText}>Nenhum post</Text>
      )}
      showsVerticalScrollIndicator={false}
    />
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
})