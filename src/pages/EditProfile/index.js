import React from "react"
import  { View, Text, StyleSheet } from 'react-native'
import Button from '../../components/Button'
import EditButton from '../../components/EditButton'
import NameInput from "../../components/NameInput"
import DepartmentInput from "../../components/DepartmentInput"
import { Feather } from "@expo/vector-icons"

export default function EditProfile({ navigation }) {
  return (
    <View style={styles.container}>
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
      <View style={styles.flexGrow} />
      <Button
      buttonText="Editar"
      handlePress={() => navigation.navigate('MyProfileScreen')}
      />
    </View>
      
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold'
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
    margin: 20,
  },
  iconUser: {
    fontSize: 50,
    marginHorizontal: 25,
  },
  flexGrow: {
    flex: 0.5,
  },
})