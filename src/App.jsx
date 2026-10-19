import './App.css'
import './style/style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/About' />
          <Route path='/Contact' />
        </Routes>
      </Router>
    </>
  )
}

export default App
