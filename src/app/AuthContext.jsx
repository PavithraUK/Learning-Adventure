import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(); // const x

export function AuthProvider({ children }) {
  // fn y
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");

    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (username, role) => {
    const userData = {
      username,
      role,
    };

    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
