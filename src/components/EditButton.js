import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Upload({ handlePress, color, backgroundColor }) {
    return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor}]}
      onPress={handlePress}
      >
        <View>
          <Feather name="edit-2" size={16} color={color} />
        </View>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
      borderRadius: 20,
      width: 30,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
});