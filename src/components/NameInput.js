import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const NameInput = ({ style, ...props }) => {
  return (
    <View style={[styles.container, style]}>
      <Feather name="user" size={20} color="gray" style={styles.icon}/>
      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#444444',
  },
});

export default NameInput;