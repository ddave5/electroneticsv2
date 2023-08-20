import React from 'react'
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'

import AnimatedRoutes from './component/AnimatedRoutes/AnimatedRoutes';

function App() {
  
  return (
    <React.Fragment >
      <Router >
          <Navbar/>
          <AnimatedRoutes />
          <Footer/>
      </Router>
    </React.Fragment>
  );
}

export default App;
