import { Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import Questions from '../Questions/Questions'
import Results from '../Results/Results'

function App() {
  return (
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='questions' element={<Questions />} />
          <Route path='results' element={<Results />} />
          <Route path='*' element={<section>An error occurred. Page not found.</section>} />
        </Routes>
  );
}

export default App;
