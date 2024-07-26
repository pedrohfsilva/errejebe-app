import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function Upload({ handlePress }) {
    return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.area}>
      <Feather name="user" size={50} color="#888888" style={styles.icon} />
      <Feather name="edit-2" size={22} color="#fff" style={styles.iconEdit}/>
      </View>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  area: {
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 100,
    backgroundColor: '#d9d9d9',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },

  iconEdit:{
    position: 'absolute',
    top: 65,
    right: 0,
    borderRadius: 20,
    backgroundColor: '#0168BC',
    width: 30,
    height: 30,
  },
});
