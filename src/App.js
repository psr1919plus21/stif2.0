import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';

function App() {
  return (
    <div className="stif">
      <Header
        leftSlot={'STIF'}
        rightSlot={'channels components will be here'}
      />
    </div>
  );
}

export default App;
