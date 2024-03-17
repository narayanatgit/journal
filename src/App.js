import About from "./About";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Model from "./Model";


import Header from "./Header";
function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path="/" element={<Header/>}/>
    
    </Routes>
   </Router>





  </>


  );
}

export default App;
