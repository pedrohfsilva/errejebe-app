import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./pages/Home";
import CommentsScreen from "./pages/Comments";
import SearchScreen from "./pages/Search";
import CreateScreen from "./pages/Create";
import NotificationsScreen from "./pages/Notifications";
import MyProfileScreen from "./pages/MyProfile";
import ProfileScreen from "./pages/Profile";
import EditProfileScreen from "./pages/EditProfile";
import LoginScreen from "./pages/Login";
import RecoverPasswordScreen from "./pages/RecoverPassword";
import NewPasswordScreen from "./pages/NewPassword";
import RegisterScreen from "./pages/Register";

import ProfilePhoto from "./components/ProfilePhoto";

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
        headerTitleAlign: 'center'
      }}
    >
      <Tab.Screen name="Inicial" component={HomeScreen} options={{
        tabBarIcon: ({ size, color }) => (
          <Feather name="home" size={size} color={color}/>
        )
      }}/>

      <Tab.Screen name="Procurar" component={SearchScreen} options={{
        tabBarIcon: ({ size, color }) => (
          <Feather name="search" size={size} color={color}/>
        )
      }}/>

      <Tab.Screen name="Criar postagem" component={CreateScreen} options={{
        tabBarIcon: ({ size, color }) => (
          <Feather name="plus-circle" size={size} color={color}/>
        )
      }}/>

      <Tab.Screen name="Notificações" component={NotificationsScreen} options={{
        tabBarIcon: ({ size, color }) => (
          <Feather name="bell" size={size} color={color}/>
        )
      }}/>

      <Tab.Screen name="Meu perfil" component={MyProfileScreen} options={{
        tabBarIcon: ({ size, color }) => (
          <ProfilePhoto size={size} color={color} />
        )
      }}/>
    </Tab.Navigator>
  );
}

export function StackRoutes() {
  return (
    <Stack.Navigator 
      initialRouteName="TabRoutes" 
      screenOptions={{
        headerTitleAlign: 'center'
      }}
    >
      <Stack.Screen name="TabRoutes" component={TabRoutes} options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Redefinir senha" component={RecoverPasswordScreen} />
      <Stack.Screen name="Registrar" component={RegisterScreen} />
      <Stack.Screen name="Comentários" component={CommentsScreen} />
      <Stack.Screen name="Ver perfil" component={ProfileScreen} />
      <Stack.Screen name="Editar perfil" component={EditProfileScreen} />
      <Stack.Screen name="Nova senha" component={NewPasswordScreen} />
    </Stack.Navigator>
  );
}