import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greetings from './components/Greetings';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Greetings />} />
        <Route path="/messages/random" element={<Greetings />} />
      </Routes>
    </Router>
  );
}

export default App;
