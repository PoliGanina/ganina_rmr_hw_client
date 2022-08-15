import Layout from "./screens/layout";
import RouterComponent from "./infrastructure/router";
import { ProtectedRoute } from "./infrastructure/router";
import { useState } from "react";
import { login, logout } from "./infrastructure/services";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./screens/loginPage/loginPage";
import KittyPage from "./screens/kittyPage/kittyPage";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = ({ email, password, phone }) => {
    const userData = login({ email, password, phone });
    setUser(userData);
  };

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return (
    <div className="app">
      <Router>
        <Layout user={user} handleLogout={handleLogout}>
          <Routes>
            <Route index element={<LoginPage handleLogin={handleLogin} />} />
            <Route
              path="/kitty"
              element={
                <ProtectedRoute user={user}>
                  <KittyPage />
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
