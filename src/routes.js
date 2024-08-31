import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { TouchableOpacity, Text } from "react-native"

import HomeScreen from "./pages/Home"
import CommentsScreen from "./pages/Comments"
import SearchScreen from "./pages/Search"
import CreateScreen from "./pages/Create"
import NotificationsScreen from "./pages/Notifications"
import MyProfileScreen from "./pages/MyProfile"
import ProfileScreen from "./pages/Profile"
import EditProfileScreen from "./pages/EditProfile"
import LoginScreen from "./pages/Login"
import RecoverPasswordScreen from "./pages/RecoverPassword"
import NewPasswordScreen from "./pages/NewPassword"
import RegisterScreen from "./pages/Register"
import UploadScreen from "./pages/UploadScreen"

import ProfilePhoto from "./components/ProfilePhoto"
import PublishButton from "./components/PublishButton"
import ExitButton from "./components/ExitButton"
import Logo from "./components/Logo"
import { Feather } from '@expo/vector-icons'


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarShowLabel: false,
        headerTitleAlign: 'center',
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
        tabBarIcon: ({ size, color }) => (
          <Feather name="home" size={size} color={color}/>
        ),
        headerLeft: () => (
          <Text style={{ fontSize: 30, color: '#0168BC', fontWeight: 'bold', marginLeft: 20 }}>ERREJEBE</Text>
        ),
        headerRight: () => (
          <ExitButton />
        ),
        headerTitle: ''
      }}/>

      <Tab.Screen name="SearchScreen" component={SearchScreen} options={{
        tabBarIcon: ({ size, color }) => (
          <Feather name="search" size={size} color={color}/>
        ),
        headerTitle: 'Pesquisar membro'
      }}/>

      <Tab.Screen name="CreateScreen" component={CreateScreen} options={{
        tabBarIcon: ({ size, color }) => (
          <Feather name="plus-circle" size={size} color={color}/>
        ),
        headerTitle: 'Criar postagem',
        headerRight: () => <PublishButton />
      }}/>

      <Tab.Screen name="NotificationsScreen" component={NotificationsScreen} options={{
        tabBarIcon: ({ size, color }) => (
          <Feather name="bell" size={size} color={color}/>
        ),
        headerTitle: 'Notificações'
      }}/>

      <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} options={{
        tabBarIcon: ({ size, color }) => (
          <ProfilePhoto size={size} color={color} />
        ),
        headerTitle: 'Meu perfil'
      }}/>
    </Tab.Navigator>
  )
}

export function StackRoutesApp() {
  return (
    <Stack.Navigator 
      initialRouteName="TabRoutes" 
      screenOptions={{
        headerTitleAlign: 'center'
      }}
    >
      <Stack.Screen name="TabRoutes" component={TabRoutes} options={{ headerShown: false }} />
      <Stack.Screen name="CommentsScreen" component={CommentsScreen} options={{ headerTitle: 'Comentários' }} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerTitle: 'Ver perfil' }} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{ headerTitle: 'Editar perfil' }} />
      <Stack.Screen name="UploadScreen" component={UploadScreen} options={{ headerTitle: 'Upload' }} />
    </Stack.Navigator>
  )
}

export function StackRoutesAuth() {
  return (
    <Stack.Navigator 
      initialRouteName="LoginScreen" 
      screenOptions={{
        headerTitleAlign: 'center'
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerTitle: 'Login' }} />
      <Stack.Screen name="RecoverPasswordScreen" component={RecoverPasswordScreen} options={{ headerTitle: 'Redefinir senha' }} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerTitle: 'Registrar' }} />
      <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} options={{ headerTitle: 'Nova senha' }} />
      <Stack.Screen name="UploadScreen" component={UploadScreen} options={{ headerTitle: 'Upload' }} />
    </Stack.Navigator>
  )
}