import { Routes, Route, Navigate, Link } from "react-router-dom";
import NoAccessMessage from "../features/no-access/noAccessMessage";
import ContentPage from "../screens/contentPage.js/contentPage";
import LoginPage from "../screens/loginPage/loginPage";

const RouterComponent = ({ user, handleLogin, url }) => {
  return (
    <Routes>
        <Route
          exact
          path="/"
          element={
            user ? (
              <Navigate to="/kitty" element={<ContentPage url={url} />} />
            ) : (
              <LoginPage handleLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/kitty"
          element={
            <ProtectedRoute user={user}>
              <ContentPage url={url} />
            </ProtectedRoute>
          }
        />
      </Routes>
  )
};

export const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <NoAccessMessage />;
  }

  return children;
};

export default RouterComponent;
