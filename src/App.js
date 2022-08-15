import Layout from "./screens/layout";
import RouterComponent from "./infrastructure/router";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import FormComponent from "./feature/form/form";
import { useState } from "react";
import { login } from "./infrastructure/services";


const App = () => {
  const [user, setUser] = useState(null);

  

  const handleLogin = ({email, password, phone}) => {
    const userData = login({email, password, phone});
    setUser(userData);

  }


  return (
    <div className="app">
      <Router>
        <Layout user={user}>
          <FormComponent onSubmit={handleLogin}/>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
