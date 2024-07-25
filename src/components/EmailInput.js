// EmailInput.js
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const EmailInput = ({ style, ...props }) => {
  return (
    <View style={[styles.container, style]}>
      <Icon name="email" size={20} color="gray" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Email"
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

export default EmailInput;
