import React from 'react';
import './App.css';
import Header from './components/header/Header';
import InputBox from './components/InputBox/InputBox';
import Display from './components/Display/Display';

function App() {
  return (
    <div className="App">
      <Header/>
      <InputBox/>
      <Display/>
    </div>
  );
}

export default App;
