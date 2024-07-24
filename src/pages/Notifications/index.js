import React from "react";
import  { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

import Notification from '../../components/Notification'

export default function Notifications({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
      <Notification navigation={navigation} notificationId={3278372387} />
      <Notification navigation={navigation} notificationId={737283728} />
      <Notification navigation={navigation} notificationId={737283728} />
      <Notification navigation={navigation} notificationId={737283728} />
      <Notification navigation={navigation} notificationId={737283728} />
      <Notification navigation={navigation} notificationId={3278372387} />
      <Notification navigation={navigation} notificationId={737283728} />
      <Notification navigation={navigation} notificationId={737283728} />
      <Notification navigation={navigation} notificationId={737283728} />
      <Notification navigation={navigation} notificationId={737283728} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 15,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold'
  }
})