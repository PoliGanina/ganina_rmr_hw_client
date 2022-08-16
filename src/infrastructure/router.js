import { Routes, Route, Navigate, Link } from "react-router-dom";
import ContentPage from "../screens/contentPage.js/contentPage";
import LoginPage from "../screens/loginPage/loginPage";

// const RouterComponent = ({ user, handleLogin }) => {
//   <Routes>
//     <Route index element={<LoginPage handleLogin={handleLogin} />} />
//     <Route
//       path="/kitty"
//       element={
//         <ProtectedRoute user={user}>
//           <ContentPage url={imgUrl} />
//         </ProtectedRoute>
//       }
//     />
//   </Routes>;
// };

export const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return (
      <Link to="*" className="header__signin">
        Sign in
      </Link>
    );
  }

  return children;
};

// export default RouterComponent;
