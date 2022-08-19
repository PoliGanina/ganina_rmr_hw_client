import { useState } from "react";
import { getUserData, login, logout } from "../api/login-api";
import { LoginContext } from "./useLogin";

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const processLoginRes = async (res) => {
    if (res === 200) {
      setUser(await getUserData());
      return;
    }

    setErrorMessage(res);
  };

  const handleLogin = ({ email, password, phone }) => {
    login({ email, password, phone }).then(processLoginRes);
  };

  const handleLogout = () => {
    logout();
    setUser(null);
    setErrorMessage(null);
  };

  return (
    <LoginContext.Provider
      value={{
        user,
        setUser,
        errorMessage,
        setErrorMessage,
        loading,
        setLoading,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
