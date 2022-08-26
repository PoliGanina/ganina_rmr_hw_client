import PropTypes from "prop-types";
import Footer from "../footer/footer";
import Header from "../header/header";
import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
