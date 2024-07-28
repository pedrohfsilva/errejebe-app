import React from "react"
import { View, Text, StyleSheet } from 'react-native'
import Logo from '../../components/Logo'
import EmailInput from '../../components/EmailInput'
import PasswordInput from '../../components/PasswordInput'
import Button from '../../components/Button'

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.text}>Insira suas informações de login para entrar</Text>
      <EmailInput />
      <PasswordInput />
      <View style={styles.flexGrow} />
      <Button 
        buttonText="Entrar"
        handlePress={() => navigation.navigate('HomeScreen')}
      />
      <Text style={styles.text}>Ainda não tem uma conta?
        <Text style={styles.linkText}
            onPress={() => navigation.navigate('RegisterScreen')}>
          Cadastrar
        </Text>
      </Text>
      <Text style={styles.linkText} onPress={() => navigation.navigate('RecoverPasswordScreen')}>Esqueci minha senha</Text>
    </View>
  )
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
})