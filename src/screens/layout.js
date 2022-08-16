import Footer from "../features/footer/footer";
import Header from "../features/header/header";

const Layout = ({ user, handleLogout, children }) => {
  return (
    <>
      <Header user={user} handleLogout={handleLogout} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
