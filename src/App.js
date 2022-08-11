import { Routes, Route, Link } from "react-router-dom";
import Footer from "./Feature/Footer/Footer";
import Header from "./Feature/Header/Header";
import './App.css';


const App = () => {
  return (
    <div className="app">
      <Header/>
      
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes> */}
      <Footer />
    </div>
  );
};

export default App;
