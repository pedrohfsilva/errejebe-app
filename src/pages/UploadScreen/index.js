import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import Logo from '../../components/Logo';
import Button from "../../components/Button";
import { Feather } from '@expo/vector-icons';

export default function Upload({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo />       
      <View style={styles.buttonsView}>
      <Text style={styles.title}>Upload de Foto</Text>
      <Text style={styles.subTitle}>Escolha sua foto de perfil</Text>
        <View style={styles.button}>
          <Button 
            buttonText="Tirar foto"
            handlePress={() => navigation.navigate('UploadScreen')}
          />
        </View>
        <View style={styles.button}>
          <Button 
            buttonText="Abrir Galeria"
            handlePress={() => navigation.navigate('UploadScreen')}
          />
        </View>
        <View style={styles.button}>
          <Button 
            buttonText="Cancelar"
            handlePress={() => navigation.navigate('UploadScreen')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'regular',
    color: '#444444',
    textAlign: 'center',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'regular',
    color: '#444444',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonsView: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#0168BC',
    borderRadius: 20,
    paddingVertical: 10,
  },
  button: {
    marginVertical: 10,
  },
});
