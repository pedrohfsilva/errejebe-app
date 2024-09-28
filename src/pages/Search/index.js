import { useState, useEffect } from "react";
import { View, TextInput, FlatList, RefreshControl, ActivityIndicator, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { IP_PROVISORIO } from '@env';

import ProfileSearch from "../../components/ProfileSearch";

export default function Search({ navigation, userId }) {
  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(`http://${IP_PROVISORIO}/api/users`);
      const json = await response.json();
      setUsers(json);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  async function handleRefresh() {
    setRefreshing(true);
    try {
      const response = await fetch(`http://${IP_PROVISORIO}/api/users`);
      const json = await response.json();
      console.log('Users refreshed:', json); // Log para verificar os dados retornados
      setUsers(json);
    } catch (error) {
      console.error('Error refreshing users:', error);
    } finally {
      setRefreshing(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Filtrar os usuários de acordo com o texto de pesquisa
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <Feather name="search" color="#444" size={25} />
        <TextInput 
          style={styles.searchInput}
          onChangeText={setSearchText}
          value={searchText}
          placeholder="Pesquisar perfil"
        />
      </View>
      <View style={styles.profilesContainer}>
        { loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList 
            data={filteredUsers}
            keyExtractor={item => item._id.toString()}
            renderItem={({ item }) => (
              <ProfileSearch navigation={navigation} userInfo={item} />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  searchInputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#888',
  },
  searchInput: {
    flex: 1,
    color: '#222',
    fontSize: 18
  },
  profilesContainer: {
    flex: 1,
  }
});
