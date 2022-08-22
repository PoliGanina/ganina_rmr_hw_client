import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";
import { PulseLoader } from "react-spinners";

import ContentPage from "../screens/contentPage/contentPage";
import LoginPage from "../screens/loginPage/loginPage";
import { useLogin } from "../features/login/context/useLogin";

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/kitty"
        element={
          <ProtectedRoute>
            <ContentPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export const ProtectedRoute = ({ children }) => {
  const { hasCookie } = useLogin();

  if (hasCookie === undefined) {
    return <PulseLoader />;
  }

  if (hasCookie === false ) {
    return(
      <Navigate to="/" element={<LoginPage />} />
    ) 
  }

  return children;
};

export default RouterComponent;
