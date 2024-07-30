import { useEffect } from "react"
import  { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

import Post from '../../components/Post'
import ExitButton from "../../components/ExitButton"

export default function Home({ navigation }) {
  function handleExit() {
    navigation.navigate('LoginScreen');
  }
  
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ExitButton handlePress={handleExit} />
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
      <Post navigation={navigation} postId={938374} />
      <Post navigation={navigation} postId={938374} />
      <Post navigation={navigation} postId={938374} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})