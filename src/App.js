import * as React from "react";
import {Routes, Route} from "react-router-dom";

import './styles/main.css';

import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Home from './pages/Home';
import Error from './pages/Error';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='*' element={<Error/>} />
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
