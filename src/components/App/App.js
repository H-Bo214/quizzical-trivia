import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import Questions from '../Questions/Questions'
import Results from '../Results/Results'

function App() {
  return (
        <Routes>
          <Route path='/' index element={<HomePage />} />
          <Route path='questions' element={<Questions />} />
          <Route path='results' element={<Results />} />
          <Route path='*' element={<div>An error occurred. Page not found.</div>} />
        </Routes>

  );
}

export default App;
