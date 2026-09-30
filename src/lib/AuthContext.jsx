import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Mock user state so the app runs without external authentication providers
  const [user, setUser] = useState({
    id: "local-user-1",
    email: "user@example.com",
    full_name: "Local Developer",
  });
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [authChecked, setAuthChecked] = useState(true);
  const [appPublicSettings, setAppPublicSettings] = useState({
    id: "local-app",
    public_settings: {},
  });

  useEffect(() => {
    // Initialization mock if needed
    checkAppState();
  }, []);

  const checkAppState = async () => {
    // Simulated app state loading
    setIsLoadingPublicSettings(false);
    setIsLoadingAuth(false);
  };

  const checkUserAuth = async () => {
    // Simulated user auth check
    setIsAuthenticated(true);
  };

  const logout = (shouldRedirect = true) => {
    setUser(null);
    setIsAuthenticated(false);
    if (shouldRedirect) {
      window.location.href = "/";
    }
  };

  const navigateToLogin = () => {
    console.log("Navigate to login placeholder");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoadingAuth,
        isLoadingPublicSettings,
        authError,
        appPublicSettings,
        authChecked,
        logout,
        navigateToLogin,
        checkUserAuth,
        checkAppState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
