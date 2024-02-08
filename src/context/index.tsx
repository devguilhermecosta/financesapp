import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../api';


interface AuthContextProps {
  user: Promise<string | null> | null;
  csrfToken: Promise<string | null> | null;
  handleLogin: (email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextProps);

export default function AuthProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
  const [user, setUser] = useState<Promise<string | null> | null>(() => AsyncStorage.getItem('@access_token'));
  const [csrfToken, setCsrfToken] = useState<Promise<string | null> | null>(() => AsyncStorage.getItem('@csrfToken'));

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
    })
    .catch(() => setUser(null));
  }

  // TODO - to create the function to renew automatically the user access token

  return (
    <AuthContext.Provider 
      value={{ 
        user: user,
        csrfToken: csrfToken,
        handleLogin: handleLogin,
      }}>
      {children}
    </AuthContext.Provider>
  )
}