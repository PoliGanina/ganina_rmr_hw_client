import { Routes, Route } from "react-router-dom";
import { useLogin } from "../features/login/context/useLogin";
import NoAccessMessage from "../features/no-access/noAccessMessage";
import ContentPage from "../screens/contentPage.js/contentPage";
import LoginPage from "../screens/loginPage/loginPage";

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
  const { user } = useLogin();

  if (!user) {
    return <NoAccessMessage />;
  }

  return children;
};

export default RouterComponent;
