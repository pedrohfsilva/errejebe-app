import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import { IP_PROVISORIO } from '@env';

import Post from '../../components/Post';
import ExitButton from "../../components/ExitButton";

export default function Home({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  function handleExit() {
    navigation.navigate('LoginScreen');
  }

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(`http://${IP_PROVISORIO}/api/posts`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setLoading(false);
    }
  };

  async function handleRefresh() {
    setRefreshing(true);
    try {
      const response = await fetch(`http://${IP_PROVISORIO}/api/posts`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Error refreshing data: ', error);
    } finally {
      setRefreshing(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ExitButton handlePress={handleExit} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList 
          data={data}
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
});
