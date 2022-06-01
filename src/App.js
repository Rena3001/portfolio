import './App.css';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project'
import Contact from './components/Contact'

import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Header />
        <Routes >
        <Route exact path="/" element={<About />} />

          <Route exact path="/about" element={<About />} />
          <Route  path="/contact" element={<Contact />} />
          <Route  path="/project" element={<Project />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
