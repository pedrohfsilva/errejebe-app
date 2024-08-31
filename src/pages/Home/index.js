import { useEffect, useState, useContext } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import { IP_PROVISORIO } from '@env';
import { AuthContext } from '../../contexts/AuthContext';

import Post from '../../components/Post';
import ExitButton from "../../components/ExitButton";

export default function Home({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const { logout } = useContext(AuthContext);

  // Função para lidar com o logout
  async function handleExit() {
    try {
      await logout(); 
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  }

  // Função para buscar os dados dos posts
  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(`http://${IP_PROVISORIO}/api/posts`);
      if (!response.ok) {
        throw new Error('Erro ao carregar posts do usuário');
      }
      
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Erro ao buscar dados: ', error);
    } finally {
      setLoading(false);
    }
  };

  // Função para atualizar os dados ao puxar para atualizar
  async function handleRefresh() {
    setRefreshing(true);
    try {
      const response = await fetch(`http://${IP_PROVISORIO}/api/posts`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Erro ao atualizar dados: ', error);
    } finally {
      setRefreshing(false);
    }
  }

  // useEffect para buscar os dados na montagem do componente
  useEffect(() => {
    fetchData();
  }, []);

  // useEffect para configurar o botão de logout no cabeçalho
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
        <ActivityIndicator size="large" color="#0000ff" />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});
