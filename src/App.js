import Layout from "./screens/layout";
import RouterComponent from "./infrastructure/router";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import FormComponent from "./feature/form/form";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  const doAuthorise = ({email, password, phone}) => {
    try {
      axios.post("http://51.250.65.73/api/v1/login", {
        email,
        password,
        phone,
      }).then( (res) => {
        if (res.status == 200) {
          setIsAuth(true)
        }
      })
    } catch (error) {
      alert("Sorry, you are not registered");
    }
  };

  const getUserData = async () => {
    try {
      const res = await axios.get("http://51.250.65.73/api/v1/profile");
      console.log(res.data);
      setUser(res.data);
    } catch (error) {
      
    }
  }

  const handleLogin = ({email, password, phone}) => {
    doAuthorise({email, password, phone});
    if (isAuth) {
      console.log('handleSubmit works')
      getUserData();
    }
  }


  return (
    <div className="app">
      <Router>
        <Layout>
          <FormComponent onSubmit={handleLogin}/>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
