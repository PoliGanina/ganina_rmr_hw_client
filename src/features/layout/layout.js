import Footer from "../footer/footer";
import Header from "../header/header";
import './layout.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
        <div className="content">
          {children}
        </div>
      <Footer />
    </>
  );
};

export default Layout;
