import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, Alert, ActivityIndicator } from 'react-native';
import Button from '../../components/Button';
import EditButton from '../../components/EditButton';
import Input from "../../components/Input";
import { Feather } from "@expo/vector-icons";
import { IP_PROVISORIO } from '@env';
import { AuthContext } from "../../contexts/AuthContext";

export default function EditProfile({ navigation, route }) {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [loading, setLoading] = useState(true)
  const [profileData, setProfileData] = useState({})

  const { userId } = useContext(AuthContext);

  async function loadProfile() {
    setLoading(true);
    try {
      const response = await fetch(`http://${IP_PROVISORIO}/api/users/${userId}`);
      if (!response.ok) {
        throw new Error('Erro ao carregar perfil do usuário');
      }

      const json = await response.json();
      setProfileData(json);
    } catch (error) {
      console.error('Erro ao buscar dados: ', error);
    } finally {
      setLoading(false);
    }
  };

  async function handleEdit() {
    if (!name || !department) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('positionCompany', department);

    // Se uma imagem foi selecionada, adicione-a ao FormData
    if (image) {
      const filename = image.split('/').pop();
      const fileType = filename.split('.').pop();
      formData.append('file', {
        uri: image,
        name: filename,
        type: `image/${fileType}`,
      });
    }

    try {
      const response = await fetch(`http://${IP_PROVISORIO}/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar o perfil');
      }

      const data = await response.json();
      Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
      navigation.navigate('MyProfileScreen');
    } catch (error) {
      console.error('Erro ao atualizar o perfil:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao atualizar o perfil. Tente novamente.');
    }
  }

  useEffect(() => {
    if (route.params?.image) {
      setImage(route.params.image);
    }
  }, [route.params?.image]);

  useEffect(() => {
    loadProfile()
  }, [])

  useEffect(() => {
    setName(profileData.name)
    setDepartment(profileData.positionCompany)
  }, [profileData])

  return (
    <View style={styles.container}>
      { loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <View style={styles.editPhotoContainer}>
            {image ? (
              <Image source={{ uri: image }} style={styles.uploadedPhoto} />
            ) : (
              profileData.imageSrc && (
                <Image source={{ uri: `http://${IP_PROVISORIO}/${profileData.imageSrc}` }} style={styles.uploadedPhoto} />
              )
            )}
            <EditButton
              color={"#FFFFFF"}
              backgroundColor={"#0168BC"}
              handlePress={() => navigation.navigate('UploadScreen', { from: 'EditProfileScreen' })}
            />
          </View>
          <Input iconName="user" placeholder="Nome" value={name} onChange={setName} />
          <Input iconName="briefcase" placeholder="Área na empresa" value={department} onChange={setDepartment} />
    
          <View style={styles.flexGrow} />
          <Button buttonText="Editar" handlePress={handleEdit} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  editPhotoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#d9d9d9',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 20,
    position: 'relative'
  },
  uploadedPhoto: {
    width: '100%',
    height: '100%',
    borderRadius: 1000,
    position: 'absolute'
  },
  flexGrow: {
    flex: 0.5,
  },
});
