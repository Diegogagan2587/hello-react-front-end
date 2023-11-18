import { Routes, Route } from 'react-router-dom';
import './App.css';
import Greetings from './pages/Greetings';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/greetings">Greetings</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/greetings" element={<Greetings/>} />
        <Route path="*" element={<h1>404 Not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
