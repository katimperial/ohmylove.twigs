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
      <div className='scroll-bar'>
        <div className='scroll-text'>
          EP1: WEAK SPOT ACHE BREATHE HIDE
          EP2: HOW'S THAT PAPI PACIFY WATER ME ULTRAVIOLET
          LP1: PREFACE LIGHTS ON TWO WEEKS HOURS PENDULUM VIDEO GIRL NUMBERS CLOSER GIVE UP KICKS
          M3LL155X: FIGURE 8 I'M YOUR DOLL IN TIME GLASS & PATRON MOTHERCREEP
          MAGDALENE: THOUSAND EYES HOME WITH YOU SAD DAY HOLY TERRAIN MARY MAGDALENE FALLEN ALIEN MIRRORED HEART DAYBED CELLOPHANE
          CAPRISONGS: RIDE THE DRAGON HONDA(FEAT. PA SALIEU) META ANGEL TEARS IN THE CLUB(FEAT. THE WEEKND) OH MY LOVE PAMPLEMOUSSE CAPRISONGS INTERLUDE LIGHTBEAMERS PAPI BONES(FEAT. SHYGIRL) WHICH WAY(FEAT. DYSTOPIA) JEALOUSY(FEAT. REAMA) CARELESS(FEAT. DANIEL CAESAR) MINDS OF MEN TRACK GIRL INTERLUDE DARJEELING(FEAT. JORJA SMITH AND UNKNOWN T) CHRISTI INTERLUDE THANK YOU SONG
        </div>
      </div>
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
