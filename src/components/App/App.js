import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import Questions from '../Questions/Questions'

function App() {
  return (
        <Routes>
          <Route path='/' index element={<HomePage />} />
          <Route path='questions' element={<Questions />} />
          <Route path='*' element={<div>An error occurred.</div>} />
        </Routes>

  );
}

export default App;
