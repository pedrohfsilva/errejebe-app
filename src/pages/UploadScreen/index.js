import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import Button from "../../components/Button";
import * as ImagePicker from 'expo-image-picker';

export default function Upload({ navigation, route }) {
  const [image, setImage] = useState('');
  const { from } = route.params;

  const handleTakePicturePress = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Precisamos da sua permissão para usar a câmera.');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

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
  };

  const handleSendPress = () => {
    if (route.params?.from) {
      navigation.navigate(route.params.from, { image }); // Envia a imagem de volta para a tela anterior
    }
  };

  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={[styles.image, { borderRadius: from == 'CreateScreen' ? 0 : 100 }]} />}
      <View style={styles.buttonsView}>
        <Text style={styles.title}>Upload de Foto</Text>
        <View style={styles.button}>
          <Button
            buttonText="Tirar foto"
            handlePress={handleTakePicturePress}
          />
        </View>
        <View style={styles.button}>
          <Button 
            buttonText="Abrir galeria"
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
            buttonText="Usar essa foto"
            handlePress={handleSendPress} // Navega de volta com a imagem selecionada
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
  },
});
