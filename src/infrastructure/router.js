import { Routes, Route, Navigate} from "react-router-dom";
import KittyPage from "../screens/kittyPage/kittyPage";
import LoginPage from "../screens/loginPage/loginPage";

const RouterComponent = ({loggedIn}) => {
    <Routes>
      <Route path="/" element={<LoginPage />}>
        {/* {loggedIn ? <Navigate to="/dashboard" /> : <KittyPage />} */}
      </Route>
    </Routes>
};

export default RouterComponent;
