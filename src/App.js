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

      /* Temp wrapper, will be replaced with content component */
      <div className="content">

      </div>
    </div>
  );
}

export default App;
