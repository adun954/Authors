import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Add from './views/Add'
import Update from './views/Update';
function App() {
    return (
    <div className="App">
      
      <Routes>
        
        <Route element={<Main/>} path="/authors" /> 
        <Route element={<Add/>} path="/authors/new" />
        <Route element={<Update/>} path="/authors/:id/edit"/>
      </Routes>                         
    </div>
    );
}

export default App;

