import { useState } from "react";
import  { View, ScrollView, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

import ProfileSearch from "../../components/ProfileSearch";

export default function Search({ navigation, userId }) {
  const [searchText, setSearchText] = useState('');

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
      <ScrollView style={styles.profilesContainer}>
        <ProfileSearch navigation={navigation} userId={372372388} />
        <ProfileSearch navigation={navigation} userId={372372388} />
        <ProfileSearch navigation={navigation} userId={372372388} />
        <ProfileSearch navigation={navigation} userId={372372388} />
        <ProfileSearch navigation={navigation} userId={372372388} />
        <ProfileSearch navigation={navigation} userId={372372388} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
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
})