import { Routes, Route, Navigate } from "react-router-dom";
import KittyPage from "../screens/kittyPage/kittyPage";
import LoginPage from "../screens/loginPage/loginPage";

const RouterComponent = ({ user }) => {
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route
      path="/kitty"
      element={
        <ProtectedRoute user={user}>
          <KittyPage />
        </ProtectedRoute>
      }
    />
  </Routes>;
};

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RouterComponent;
