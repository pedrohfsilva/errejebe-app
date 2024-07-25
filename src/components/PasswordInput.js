import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const TextInputPassword = () => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Senha"
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    padding: 20,
    borderRadius: 20,
    color: '#444444',
    borderColor: '#444444',
  },
});

export default TextInputPassword;