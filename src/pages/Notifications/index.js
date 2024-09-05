import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Alert } from 'react-native';
import Notification from '../../components/Notification';
import { IP_PROVISORIO } from '@env';

export default function Notifications({ navigation }) {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar as notificações do usuário
  async function fetchNotifications() {
    try {
      const userId = "user_id_example"; // Substitua com o ID do usuário logado
      const response = await fetch(`http://${IP_PROVISORIO}/api/notification/${userId}`);
      const data = await response.json();

      if (response.status === 200) {
        setNotifications(data);
      } else {
        Alert.alert('Erro', 'Erro ao buscar notificações.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Erro de conexão ao buscar notificações.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchNotifications();
  }, []);

  // Função para renderizar cada item da lista

  // Exibição de um indicador de carregamento ou a lista de notificações
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item._id.toString()}
          renderItem={() => <Notification notificationInfo={item} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 15,
  },
});
