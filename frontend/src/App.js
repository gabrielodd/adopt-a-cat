import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import NavBar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'
import Message from './components/layout/Message'

import Home from './components/pages/Home'
import Login from './components/pages/Auth/Login'
import Register from './components/pages/Auth/Register'
import Profile from './components/pages/User/Profile'

import {UserProvider} from './context/UserContext'

function App() {
  return (
    <Router>
      <UserProvider>
        <NavBar></NavBar>
        <Message></Message>
        <Container>
          <Routes>
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/user/profile" element={<Profile/>} />
            <Route exact path="/" element={<Home/>} />
          </Routes>
        </Container>
        <Footer></Footer>
      </UserProvider>
    </Router>
  );
}

export default App;
