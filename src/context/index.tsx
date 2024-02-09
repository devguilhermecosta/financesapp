import React, { createContext, useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../api';


interface AuthContextProps {
  user: Promise<string | null> | null;
  handleLogin: (email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextProps);

export default function AuthProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
  const [user, setUser] = useState<Promise<string | null> | null>(() => AsyncStorage.getItem('@access_token'));
  const [loading, setLoading] = useState(true);

  async function handleLogin(email: string, password: string): Promise<void> {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return await api.post('/api/token/', {
      email: email,
      password: password,
    }, config)
    .then(resp => {
      setUser(resp.data.access);
      AsyncStorage.setItem('@access_token', resp.data.access);
    })
    .catch(() => {
      handleLogout();
    });
  }

  function handleLogout(): void {
    setUser(null);
  }

  const handleTokenRenew = useCallback(() => {
    async function handleRenew() {
      await api.post('/api/token/refresh/')
      .then((resp) => setUser(resp.data.access))
      .catch(() => handleLogout())
      .finally(() => {if (loading) setLoading(false)});
    }

    handleRenew();

  }, []);

  useEffect(() => {
    if (loading) handleTokenRenew();
  }, [])

  useEffect(() => {
    const REFRESH_INTERVAL = 1000 * 60 * 4; // 4 minutes
    const interval = setInterval(() => {
      handleTokenRenew();
    }, REFRESH_INTERVAL);

    return () => clearInterval(interval);
  
  }, [])

  return (
    <AuthContext.Provider 
      value={{ 
        user: user,
        handleLogin: handleLogin,
      }}>
      {children}
    </AuthContext.Provider>
  )
}