import { useEffect, useState } from "react"
import  { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

import Post from '../../components/Post'
import ExitButton from "../../components/ExitButton"

export default function Home({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  function handleExit() {
    navigation.navigate('LoginScreen');
  }

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch('http://172.26.91.18:3000/api/posts');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, [])
  
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ExitButton handlePress={handleExit} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container} showsVerticalScrollIndicator={false} >
      { loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList 
          data={data}
          keyExtractor={item => item._id.toString()}
          renderItem={({ item }) => (
            <Post navigation={navigation} postInfo={item} />
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})