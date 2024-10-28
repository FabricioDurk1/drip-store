import React from "react";
import MainCollections from './components/MainCollections';
import SecondaryCollections from './components/SecondaryCollections';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainCollections />
      <SecondaryCollections />
    </div>
  );
}

export default App;


