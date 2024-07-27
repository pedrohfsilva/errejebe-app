import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function Upload() {
    return (
    <TouchableOpacity onPress={() => {
      console.log('uhul') // camera
    }} >
      <View style={styles.iconEdit}>
        <Feather name="edit-2" size={16} color="#fff" />
      </View>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    iconEdit:{
        borderRadius: 20,
        backgroundColor: '#0168BC',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
});