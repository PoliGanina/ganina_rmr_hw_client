import { useEffect, useLayoutEffect, useState, } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./features/layout/layout";
import RouterComponent from "./infrastructure/router";
import { getUserData } from "./features/login/api/login-api";
import { getImgUrl } from "./features/kitty/kitty.api";
import { useLogin } from "./features/login/context/useLogin";
import "./App.scss";


const App = () => {
  const {user, setUser} = useLogin();
  const [imgUrl, setImgUrl] = useState("");

  useLayoutEffect(() => {
    const fetchData = async () => {
      const userData = await getUserData();
      if (!userData) {
        return;
      }
      setUser(userData.data.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchUrl = async () => {
      const url = await getImgUrl();
      setImgUrl(url);
    };
    fetchUrl();
  }, [user]);

  // const handleLogin = ({ email, password, phone }) => {
  //   login({ email, password, phone }).then(async () => {
  //     const userData = await getUserData();
  //     setUser(userData.data.data);
  //   });
  // };

  // const handleLogout = () => {
  //   logout();
  //   setUser(null);
  // };

  return (
    <div className="app">
        <Router>
          <Layout>
            <RouterComponent
              url={imgUrl}
            />
          </Layout>
        </Router>
    </div>
  );
};

export default App;
