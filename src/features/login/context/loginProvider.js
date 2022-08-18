import { useState } from "react";
import { getUserData, login, logout } from "../api/login-api";
import { LoginContext } from "./useLogin";

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = ({ email, password, phone }) => {
    login({ email, password, phone }).then(async () => {
      const userData = await getUserData();
      setUser(userData.data.data);
    });
  };

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return (
    <LoginContext.Provider value={{ user, setUser, handleLogin, handleLogout }}>
      {children}
    </LoginContext.Provider>
  );
};
