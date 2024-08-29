import React, { useState, useEffect} from "react"
import { View, Text, StyleSheet, Image, Alert } from 'react-native'
import Logo from '../../components/Logo'
import Button from "../../components/Button"
import EditButton from '../../components/EditButton'
import Input from "../../components/Input"
import { Feather } from '@expo/vector-icons'
import { IP_PROVISORIO } from '@env';

export default function Register({ navigation, route }) {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async function handleRegister() {
    if (!name || !department || !email || !password) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Erro', 'Por favor, insira um email válido.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    try {
      // Cria o objeto do novo usuário
      const newUser = {
        name: name,
        positionCompany: department,
        email: email,
        password: password,
        photo: image,
      };

      console.log(newUser)

      // Verifica se o email já está em uso
      const response = await fetch(`http://${IP_PROVISORIO}/api/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      const data = await response.json();

      if (response.status === 400) {
        Alert.alert('Erro', data.msg); // Exibe a mensagem de erro retornada pela API
      } else if (response.status === 201) {
        Alert.alert('Sucesso', 'Usuário registrado com sucesso.');
        navigation.navigate('LoginScreen');
      } else {
        Alert.alert('Erro', 'Houve um problema ao registrar o usuário.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível realizar o registro.');
    }
  }

  useEffect(() => {
    if (route.params?.image) {
      setImage(route.params.image)
    }
  }, [route.params?.image])

  return (
    <View style={styles.container}>
      <Logo />
      {image ? (
        <Image source={{ uri: image }} style={styles.uploadedPhoto} />
      ) : (
        <View style={styles.editPhoto}>
          <Feather name="user" size={80} color="#888888" style={styles.iconUser} />
          <EditButton
            color={"#FFFFFF"}
            backgroundColor={"#0168BC"}
            handlePress={() => navigation.navigate('UploadScreen', { from: 'RegisterScreen' })}
            />
        </View>
      )}
      <Input iconName="user" placeholder="Nome" value={name} onChange={setName} />
      <Input iconName="briefcase" placeholder="Área na empresa" value={department} onChange={setDepartment} />
      <Input iconName="mail" placeholder="E-mail" value={email} onChange={setEmail} />
      <Input iconName="lock" placeholder="Senha" value={password} onChange={setPassword} isPassword />
      <Input iconName="lock" placeholder="Confirmar senha" value={confirmPassword} onChange={setConfirmPassword} isPassword />

      <View style={styles.flexGrow} />
      <Button 
        buttonText="Cadastrar"
        handlePress={handleRegister}
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
  uploadedPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  flexGrow: {
    flex: 1,
  },
})
