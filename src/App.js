import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calendar from './Calendar';
import Main from './Main';

function App() {
  
  return (
    <>
  
      <Routes>
       <Route path="/" element={<Main />} />
       
       
        <Route path="/calendar" element={<Calendar/>}/>
          
        
      </Routes>
    </>
  );
}

export default App;
