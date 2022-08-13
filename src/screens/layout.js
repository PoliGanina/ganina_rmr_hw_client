import Footer from "./../feature/footer/footer";
import Header from "./../feature/header/header";

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
