import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/pages/Home'
import Login from './components/pages/Auth/Login'
import Register from './components/pages/Auth/Register'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
