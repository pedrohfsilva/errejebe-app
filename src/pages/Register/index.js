import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import Logo from '../../components/Logo';
import NameInput from "../../components/NameInput";
import DepartmentInput from "../../components/DepartmentInput";
import EmailInput from '../../components/EmailInput';
import PasswordInput from '../../components/PasswordInput';
import ConfirmPasswordInput from '../../components/ConfirmPasswordInput';

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
        title="Cadastrar"
        onPress={() => navigation.navigate('HomeScreen')}
        style={styles.loginButton}
      />
      <Text style={styles.text}>Já tem uma conta?
        <Text style={styles.linkText}
            onPress={() => navigation.navigate('RegisterScreen')}>
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
  },
  linkText: {
    fontSize: 16,
    fontWeight: 'regular',
    textDecorationLine: 'underline',
    color: 'blue',
    
  },
  flexGrow: {
    flexGrow: 2,
  },
  loginButton: {
    marginBottom: 20,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    color: '#0168BC',
    borderColor: '#0168BC',
  },
});