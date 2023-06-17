import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Form from '../src/pages/Form';
import Result from '../src/pages/Result';


export const PAGES = {
  HOME: '/',
  FORM: '/form',
  RESULT: '/result'
}

function App() {
  return (
    <div>
      <Routes>
        <Route path={PAGES.HOME} element={<Home />} />
        <Route path={PAGES.FORM} element={<Form />} />
        <Route path={PAGES.RESULT} element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
