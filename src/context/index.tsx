import React, { createContext, useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../api';


interface AuthContextProps {
  user: Promise<string | null> | null;
  handleLogin: (email: string, password: string) => Promise<unknown>;
  handleLogout: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export default function AuthProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
  const [user, setUser] = useState<Promise<string | null> | null>(() => AsyncStorage.getItem('@access_token'));
  const [loading, setLoading] = useState(true);

  const handleLogin = async function(email: string, password: string) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const data = {
      email: email,
      password: password,
    };

    const response = await api.post('/api/token/', data, config);

    return new Promise((resolve, reject) => {
      if (response.status !== 200) {
        handleLogout();
        reject('unauthorized');
      };

      setUser(response.data.access);
      AsyncStorage.setItem('@access_token', response.data.access);
      resolve(response.data);
    })
  }

  async function handleLogout(): Promise<void> {
    setUser(null);

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    await api.post('/api/user/logout/', {}, config)
    .then(() => {
      try {
        AsyncStorage.removeItem('@access_token');
      } catch (e) {}
    });
  }

  const handleTokenRenew = useCallback(() => {
    async function handleRenew() {
      await api.post('/api/token/refresh/')
      .then((resp) => {
        setUser(resp.data.access);
        AsyncStorage.setItem('@access_token', resp.data.access);
      })
      .catch(async () => await handleLogout())
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
        handleLogout: handleLogout,
      }}>
      {children}
    </AuthContext.Provider>
  )
}