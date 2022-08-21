import { Routes, Route } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import NoAccessMessage from "../features/no-access/noAccessMessage";
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
    return <NoAccessMessage />;
  }

  return children;
};

export default RouterComponent;
