import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';

//Component
import Navbar from './components/Navbar';

//Pages
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
