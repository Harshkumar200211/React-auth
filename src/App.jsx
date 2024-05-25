import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Nav } from './components/Nav';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Update from './components/Update';
import Home from './components/Home';
import Admin from './components/Admin';
import Data from './components/Data';
import Messages from './components/Messages';
import { ToastContainer } from 'react-toastify';

const toast = {
  "margin-top": "7vh"
}

function App() {
  return (
    <>
      <ToastContainer position='top-right' theme='dark' style={toast} />
      <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/update" element={<Update />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/data' element={<Data />} />
            <Route path='/messages' element={<Messages/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
