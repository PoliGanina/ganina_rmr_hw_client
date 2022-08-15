import { Routes, Route, Navigate } from "react-router-dom";
import KittyPage from "../screens/kittyPage/kittyPage";
import LoginPage from "../screens/loginPage/loginPage";

const RouterComponent = ({user, handleLogin}) => {
  <Routes>
    <Route index element={<LoginPage handleLogin={handleLogin}/>} />
    {/* <Route
      path="/kitty"
      element={
        <ProtectedRoute user={user}>
          <KittyPage />
        </ProtectedRoute>
      }
    /> */}
  </Routes>;
};

export const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RouterComponent;
