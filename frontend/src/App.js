import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import NavBar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Home from './components/pages/Home'
import Login from './components/pages/Auth/Login'
import Register from './components/pages/Auth/Register'

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/" element={<Home/>} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
