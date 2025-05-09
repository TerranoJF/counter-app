import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CounterPage from './pages/CounterPage';
import About from './pages/About';

function App() {
  return ( 
    <Router>
      <nav style={{ marginLeft: '30px', fontSize: '25px', marginBottom: '20px' }}>
        <Link to="/">Beranda</Link> | 
        <Link to="/counter" style={{ marginLeft: '10px' }}>Counter</Link> | 
        <Link to="/about" style={{ marginLeft: '10px' }}>Tentang</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router> 
  );
}

export default App;
