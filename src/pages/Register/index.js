import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import Logo from '../../components/Logo';
import NameInput from "../../components/NameInput";
import DepartmentInput from "../../components/DepartmentInput";
import EmailInput from '../../components/EmailInput';
import PasswordInput from '../../components/PasswordInput';
import ConfirmPasswordInput from '../../components/ConfirmPasswordInput';
import Button from "../../components/Button";

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo />
      <NameInput />
      <DepartmentInput />
      <EmailInput />
      <PasswordInput />
      <ConfirmPasswordInput />
      <View style={styles.flexGrow} />
      <Button 
        buttonText="Cadastrar"
        handlePress={() => navigation.navigate('HomeScreen')}
      />
      <Text style={styles.text}>Já tem uma conta?
        <Text style={styles.linkText}
            onPress={() => navigation.navigate('LoginScreen')}>
          Fazer Login
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'regular',
    marginVertical: 10,
    color: '#444444',
    textAlign: 'center',
    margin: 10,
  },
  linkText: {
    fontSize: 16,
    fontWeight: 'regular',
    textDecorationLine: 'underline',
    color: 'blue',
    margin: 10,    
  },
  flexGrow: {
    flexGrow: 2,
  },
});