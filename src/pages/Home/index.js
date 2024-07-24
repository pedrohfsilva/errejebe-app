import React from "react";
import  { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

import Post from '../../components/Post'

export default function Home({ navigation }) {
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