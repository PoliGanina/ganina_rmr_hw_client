import { useState } from "react";
import { getUserData, login, logout } from "../api/login-api";
import { LoginContext } from "./useLogin";

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [logging, setLogging] = useState(false);


  const processLoginRes = async (res) => {
    if (res === 200) {
      setUser(await getUserData());
      
      return;
    }
    setErrorMessage(res);
    setLogging(false);
  };

  const handleLogin = ({ email, password, phone }) => {
    setErrorMessage(null);
    setLogging(true);
    login({ email, password, phone }).then(processLoginRes);
  };

  const handleLogout = () => {
    logout();
    setLogging(false);
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
        logging,
        setLogging,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
