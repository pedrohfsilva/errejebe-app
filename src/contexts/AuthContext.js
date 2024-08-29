import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [loading, setLoading] = useState(true); // Novo estado para indicar se está carregando

  useEffect(() => {
    const loadToken = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        setAuthToken(token); // Atualiza o estado com o token, mesmo que seja null
      } catch (error) {
        console.error('Erro ao carregar o token:', error);
      } finally {
        setLoading(false); // Após tentar carregar o token, mesmo com erro, setLoading é false
      }
    };

    loadToken();
  }, []);

  const login = async (token) => {
    try {
      await AsyncStorage.setItem('authToken', token);
      setAuthToken(token);
    } catch (error) {
      console.error('Erro ao salvar o token:', error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('authToken');
      setAuthToken(null);
    } catch (error) {
      console.error('Erro ao remover o token:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
