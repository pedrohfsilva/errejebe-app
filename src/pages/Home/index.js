import React from "react";
import  { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

import Post from '../../components/Post'

export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold'
  }
})