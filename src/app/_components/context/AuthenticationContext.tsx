"use client";
import React, { useContext, useState, ReactNode } from "react";

// Create context for authentication and access token
const AuthenticationContext = React.createContext<{
  isLoggedIn: boolean;
  accessToken: string | null;
}>({ isLoggedIn: false, accessToken: null });
const AuthenticationUpdateContext = React.createContext<{
  toggleIsLoggedIn: () => void;
  setAccessToken: (token: string | null) => void;
}>({ toggleIsLoggedIn: () => {}, setAccessToken: () => {} });

export function useAuth() {
  return useContext(AuthenticationContext);
}

export function useToggleAuth() {
  return useContext(AuthenticationUpdateContext);
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthenticationProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  function toggleIsLoggedIn() {
    setIsLoggedIn((prev) => !prev);
  }

  function updateAccessToken(token: string | null) {
    setAccessToken(token);
  }

  return (
    <AuthenticationContext.Provider value={{ isLoggedIn, accessToken }}>
      <AuthenticationUpdateContext.Provider
        value={{ toggleIsLoggedIn, setAccessToken: updateAccessToken }}
      >
        {children}
      </AuthenticationUpdateContext.Provider>
    </AuthenticationContext.Provider>
  );
}
