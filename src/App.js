import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import Navbar from './pages/Shared/Navbar/Navbar';
import UserDetails from './pages/UserDetails/UserDetails';
import Users from './pages/Users/Users';
// import React , { Component}  from 'react';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<p className='text-center h1 bg-dark text-white py-5'>Assalamualaikum</p>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='users' element={<Users/>}/>
        <Route path='user/:userId' element={<UserDetails/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
