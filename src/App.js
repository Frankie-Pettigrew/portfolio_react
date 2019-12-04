import React from 'react';
import Header from "./components/Header"
import About from './components/About'
import Works from './components/Works'
import './App.css';
import Education from './components/Education';

function App() {
  return (<div>
    <Header />
    <About />
    <Education />
    <Works />
   </div>
  );
}

export default App;
