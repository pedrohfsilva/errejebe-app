import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Alert, RefreshControl } from 'react-native';
import Notification from '../../components/Notification';
import { IP_PROVISORIO } from '@env';
import { AuthContext } from "../../contexts/AuthContext";

export default function Notifications({ navigation }) {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const { userId } = useContext(AuthContext)

  // Função para buscar as notificações do usuário
  async function fetchNotifications() {
    try {
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

  // Função para atualizar as notificações ao puxar para atualizar
  async function handleRefresh() {
    setRefreshing(true);
    try {
      const userId = "user_id_example"; // Substitua com o ID do usuário logado
      const response = await fetch(`http://${IP_PROVISORIO}/api/notification/${userId}`);
      const data = await response.json();

      if (response.status === 200) {
        setNotifications(data);
      } else {
        Alert.alert('Erro', 'Erro ao atualizar notificações.');
      }
    } catch (error) {
      console.error('Erro ao atualizar notificações:', error);
      Alert.alert('Erro', 'Erro de conexão ao atualizar notificações.');
    } finally {
      setRefreshing(false);
    }
  }

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => <Notification navigation={navigation} notificationInfo={item} />}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh} // Chama a função de refresh ao puxar para baixo
            />
          }
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
