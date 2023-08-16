import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from '../src/components/organisms/SignIn';
import ResetPass from './components/organisms/OtpScreen';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/forgot" element={<SignIn />} />
          <Route path="/reset" element={<ResetPass />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
