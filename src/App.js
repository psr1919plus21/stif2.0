import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';

function App() {
  return (
    <div className="stif">
      <Header
        leftSlot={ <Logo /> }
        rightSlot={'channels components will be here'}
      />
    </div>
  );
}

export default App;
