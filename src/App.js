import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Sign from './components/Sign';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Sign />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
