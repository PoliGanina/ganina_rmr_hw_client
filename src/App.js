import Layout from "./screens/layout";
import RouterComponent from "./infrastructure/router";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import FormComponent from "./feature/form/form";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Layout>
          <FormComponent/>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
