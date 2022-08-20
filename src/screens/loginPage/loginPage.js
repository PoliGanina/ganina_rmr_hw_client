import { useEffect } from "react";
import { Navigate } from "react-router";
import { getUserData } from "../../features/login/api/login-api";
import { useLogin } from "../../features/login/context/useLogin";
import FormComponent from "../../features/login/form/form";
import ContentPage from "../contentPage.js/contentPage";

const LoginPage = () => {
  const { user } = useLogin();

  return (
    user ?  <Navigate to="/kitty" element={<ContentPage />} /> : <FormComponent />
  )
};

export default LoginPage;
