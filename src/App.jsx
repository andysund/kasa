
import './App.css';
import Home from './pages/home.jsx';
import Housing from  './pages/housing.jsx';
import LoadFail from './pages/loadfail.jsx';
import Logement from './components/Logement';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
 
  return (
    <>
    <Router>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/housing" element={<Housing/>}/>
          <Route path="*" element={<LoadFail/>}/>
          <Route path="/logement/:id" element={<Logement />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
