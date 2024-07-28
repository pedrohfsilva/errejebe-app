import React from "react"
import { View, Text, StyleSheet } from 'react-native'
import Logo from '../../components/Logo'
import EmailInput from '../../components/EmailInput'
import Button from "../../components/Button"

export default function Recover({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.text}>Insira o e-mail para recuperar a senha</Text>
      <EmailInput />
      <View style={styles.flexGrow} />
      <Button 
        buttonText="Enviar e-mail de recuperação"
      />
      <Text style={styles.linkText}
          onPress={() => navigation.navigate('LoginScreen')}>
        Fazer login
      </Text>
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
  },
  linkText: {
    fontSize: 16,
    fontWeight: 'regular',
    textDecorationLine: 'underline',
    color: 'blue',
    marginTop: 12,
  },
  flexGrow: {
    flexGrow: 2,
  },
  sendButton: {
    marginBottom: 20,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    color: '#0168BC',
    borderColor: '#0168BC',
  },
})