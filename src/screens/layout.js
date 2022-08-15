import Footer from "../features/footer/footer";
import Header from "../features/header/header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
};

export default Layout;
