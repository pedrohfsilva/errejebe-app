import React, { useState } from "react"
import { View, Text, StyleSheet, Image } from 'react-native'
import Logo from '../../components/Logo'
import Button from "../../components/Button"
import * as ImagePicker from 'expo-image-picker'

export default function Upload({ navigation }) {
  const [image, setImage] = useState('');

  const handleImagePickerPress = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      {/* <Logo /> */}
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
            handlePress={handleImagePickerPress}
          />
        </View>
        <View style={styles.button}>
          <Button 
            buttonText="Cancelar"
            handlePress={() => setImage('')}
          />
        </View>
        <View style={styles.button}>
          <Button 
            buttonText="Enviar"
            handlePress={''}
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
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    margin: 30,
    borderRadius: 100,
  },
})
