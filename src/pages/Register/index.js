import React from "react"
import { View, Text, StyleSheet, Image } from 'react-native'
import Logo from '../../components/Logo'
import NameInput from "../../components/NameInput"
import DepartmentInput from "../../components/DepartmentInput"
import EmailInput from '../../components/EmailInput'
import PasswordInput from '../../components/PasswordInput'
import ConfirmPasswordInput from '../../components/ConfirmPasswordInput'
import Button from "../../components/Button"
import EditButton from '../../components/EditButton'
import { Feather } from '@expo/vector-icons'

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo />
        <View style={styles.editPhoto}>
          <Feather name="user" size={80} color="#888888" style={styles.iconUser} />
          <EditButton
            color={"#FFFFFF"}
            backgroundColor={"#0168BC"}
            handlePress={() => navigation.navigate('UploadScreen')}
            />
        </View>
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
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#444444',
    textAlign: 'center',
    marginVertical: 10,
  },
  linkText: {
    fontSize: 16,
    color: '#0168BC',
    textDecorationLine: 'underline',
  },
  editPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    backgroundColor: '#d9d9d9',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  iconUser: {
    fontSize: 50,
    marginHorizontal: 25,
  },
  flexGrow: {
    flex: 1,
  },
})
