import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./features/layout/layout";
import RouterComponent from "./infrastructure/router";
import { ImgUrlProvider } from "./features/kitty/context/imgUrlProvider";
import "./App.scss";
import { useEffect } from "react";
import { getUserData } from "./features/login/api/login-api";
import { useLogin } from "./features/login/context/useLogin";

const App = () => {
  const { setUser } = useLogin();

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserData();
      if (!userData) {
        return;
      }
      setUser(userData);
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
