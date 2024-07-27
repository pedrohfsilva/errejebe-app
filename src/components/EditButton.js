import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Upload({ handlePress }) {
    return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View>
        <Feather name="edit-2" size={16} color="#fff" />
      </View>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
      borderRadius: 20,
        backgroundColor: '#0168BC',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
});