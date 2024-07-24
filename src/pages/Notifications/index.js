import React from "react";
import  { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

import Notification from '../../components/Notification'

export default function Notifications({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Notification/>
      <Notification/>
      <Notification/>
      <Notification/>
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