import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadToken = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        setAuthToken(token);
        if (token) {
          const decodedToken = jwtDecode(token);
          setUserId(decodedToken.id); // Supondo que o ID do usuário esteja no campo 'id'
        }
      } catch (error) {
        console.error('Erro ao carregar o token:', error);
      } finally {
        setLoading(false);
      }
    };

    loadToken();
  }, []);

  const login = async (token) => {
    try {
      await AsyncStorage.setItem('authToken', token);
      setAuthToken(token);
      const decodedToken = jwtDecode(token);
      setUserId(decodedToken.id);
    } catch (error) {
      console.error('Erro ao salvar o token:', error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('authToken');
      setAuthToken(null);
      setUserId(null);
    } catch (error) {
      console.error('Erro ao remover o token:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ authToken, userId, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
