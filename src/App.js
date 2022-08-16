import Layout from "./screens/layout";
// import RouterComponent from "./infrastructure/router";
import { ProtectedRoute } from "./infrastructure/router";
import { useEffect, useState } from "react";
import {
  BASE_API,
  getImgUrl,
  getUserData,
  login,
  logout,
} from "./infrastructure/services";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import LoginPage from "./screens/loginPage/loginPage";
import ContentPage from "./screens/contentPage.js/contentPage";

const App = () => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserData();
      if (!userData) {
        return;
      }
      setUser(userData.data.data);
      setIsAuth(true);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchUrl = async () => {
      const imgEndpoint = await getImgUrl();
      const url = `${BASE_API}${imgEndpoint}`;
      setImgUrl(url);
    };
    fetchUrl();
  }, [isAuth]);

  const handleLogin = ({ email, password, phone }) => {
    login({ email, password, phone }).then(async () => {
      const userData = await getUserData();
      setUser(userData.data.data);
      setIsAuth(true);
    });
  };

  const handleLogout = () => {
    logout();
    setUser(null);
    setIsAuth(false);
  };

  return (
    <div className="app">
      <Router>
        <Layout user={user} handleLogout={handleLogout}>
          <Routes>
            <Route
              exact
              path="/"
              element={isAuth ? 
                <Navigate to='/kitty' element ={<ContentPage url={imgUrl}/>}/> : 
                <LoginPage handleLogin={handleLogin}/>
              }
            />
            <Route
              path="/kitty"
              element={
                <ProtectedRoute user={user}>
                  <ContentPage url={imgUrl} />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
