import React from 'react'
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

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
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
        </Routes>
      </main>
    </div>
  );
}

export default App;
