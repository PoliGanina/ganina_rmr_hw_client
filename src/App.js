import Layout from "./screens/layout";
import RouterComponent from "./infrastructure/router";
import { useState } from "react";
import { login, logout } from "./infrastructure/services";
import { Routes, Route} from "react-router-dom";
import "./App.css";
import LoginPage from "./screens/loginPage/loginPage";



const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = ({email, password, phone}) => {
    const userData = login({email, password, phone});
    setUser(userData);
  }

  const handleLogout = ()=> {
    logout();
    setUser(null);
  }

  return (
    <div className="app">
        <Layout user={user} handleLogout={handleLogout}>
        <RouterComponent user={user} handleLogin={handleLogin}/>
        </Layout>
    </div>
  );
};

export default App;
