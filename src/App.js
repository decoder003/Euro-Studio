import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Sign from './components/Sign';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ContactFooter from './components/ContactFooter';
import { useState } from 'react';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  const [footer, setFooter] = useState(true);
  return (
    <div className="App">
      <Header footer={footer} setFooter={setFooter} />
      <Routes>
        <Route path="/" element={<Home footer={footer} setFooter={setFooter} />} />
        <Route path="/login" element={<Sign />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services footer={footer} setFooter={setFooter} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newpassword" element={<ForgotPassword />} />
      </Routes>
      {footer ? <Footer /> : <ContactFooter />}
    </div>
  );
}

export default App;
