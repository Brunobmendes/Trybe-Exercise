import React from 'react';
import './App.css';
import Image from './Image';
import cat from './cat.jpg';

function App() {
  return (
    <div className='App'>
      <Image source={cat} alternativeText='Cute cat staring' />
    </div>
  );
}

export default App;
