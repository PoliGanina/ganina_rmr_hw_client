import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "./features/layout/layout";
import RouterComponent from "./infrastructure/router";
import { ImgUrlProvider } from "./features/kitty/context/imgUrlProvider";
import { getUserData } from "./features/login/api/login-api";
import { useLogin } from "./features/login/context/useLogin";
import "./App.scss";

const App = () => {
  const { setUser, setHasCookie } = useLogin();

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserData();
      if (!userData) {
        return;
      }
      setUser(userData.data);
      setHasCookie(userData.hasCookie);
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <Router>
        <Layout>
          <ImgUrlProvider>
            <RouterComponent />
          </ImgUrlProvider>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
