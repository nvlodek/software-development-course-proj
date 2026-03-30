import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";


function App() {
  return (
      <div>
         <Router>
         <Navbar />
         <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/contact" element={<Contact/>} />
             <Route path="*" element={<NotFound/>} />
             <Route path="/pages/PrivacyPolicy.jsx" element={<PrivacyPolicy/>} />
         </Routes>
         <Footer />
         </Router>
      </div>
    );
}

export default App;