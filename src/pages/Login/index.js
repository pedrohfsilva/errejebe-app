import { useState, useContext } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { AuthContext } from '../../contexts/AuthContext';
import { IP_PROVISORIO } from '@env';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [expoPushToken, setExpoPushToken] = useState(null);

  const { login } = useContext(AuthContext);

  async function registerForPushNotificationsAsync() {
    let token;
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
      });
    }

    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      Alert.alert('Erro', 'Não foi possível obter permissão para notificações.');
      return;
    }

    token = (await Notifications.getExpoPushTokenAsync()).data;
    return token;
  }

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
  }, []);

  async function handleLogin() {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch(`http://${IP_PROVISORIO}/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, expoPushToken }), // Inclui o expoPushToken no login
      });

      const data = await response.json();

      if (response.status === 200) {
        const { token } = data;
        await login(token); // Chama a função login do AuthContext para armazenar o token e atualizar o estado
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
      } else {
        Alert.alert('Erro', data.msg || 'Não foi possível realizar o login.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Houve um problema ao conectar ao servidor.');
    }
  }

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.text}>Insira suas informações de login para entrar</Text>
      <Input iconName="mail" placeholder="E-mail" value={email} onChange={setEmail} />
      <Input iconName="lock" placeholder="Senha" value={password} onChange={setPassword} secureTextEntry />
      <View style={styles.flexGrow} />
      <Button buttonText="Entrar" handlePress={handleLogin} />
      <Text style={styles.text}>
        Ainda não tem uma conta?
        <Text style={styles.linkText} onPress={() => navigation.navigate('RegisterScreen')}>
          Cadastrar
        </Text>
      </Text>
      <Text style={styles.linkText} onPress={() => navigation.navigate('RecoverPasswordScreen')}>
        Esqueci minha senha
      </Text>
    </View>
  );
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
    margin: 10,
  },
  linkText: {
    fontSize: 16,
    fontWeight: 'regular',
    textDecorationLine: 'underline',
    color: 'blue',
    margin: 10,
  },
  flexGrow: {
    flexGrow: 2,
  },
});
