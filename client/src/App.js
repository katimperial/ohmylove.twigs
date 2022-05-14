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

const App = () => {

  return (
    <div className="App">
      <header>
        .
      </header>
      <div className="nav">
        <Nav />
      </div>
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
        </Routes>
      </main>
    </div>
  );
}

export default App;
