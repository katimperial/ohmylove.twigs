import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Blog from './components/Blog'
import TwigzMaker from './components/TwigzMaker'
import Videos from './components/Videos'
import Gallery from './components/Gallery';
import LogIn from './components/LogIn'
import Posts from './components/Posts'

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <h1>hi</h1>
      </header>
      <div className="sidebar">
        <Sidebar />
      </div>
      <main>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/blog" element={ <Blog /> } />
          <Route path="/twigzmaker" element={ <TwigzMaker /> } />
          <Route path="/videos" element={ <Videos /> } />
          <Route path="/gallery" element={ <Gallery /> } />
          <Route path="/login" element={ <LogIn /> } />
          <Route path="/posts" element={ <Posts /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
