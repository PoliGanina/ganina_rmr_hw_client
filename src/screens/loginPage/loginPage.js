import { Navigate } from "react-router";
import { useLogin } from "../../features/login/context/useLogin";
import FormComponent from "../../features/login/form/form";
import ContentPage from "../contentPage/contentPage";

const LoginPage = () => {
  const { user } = useLogin();

  return (
    user ?  <Navigate to="/kitty" element={<ContentPage />} /> : <FormComponent />
  )
};

export default LoginPage;
