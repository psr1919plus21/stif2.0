import React from 'react';

import feedStub from './stubs/feed-stub';

import './App.scss';

import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import Feed from './components/Feed/Feed';

function App() {
  return (
    <div className="stif">
      <Header
        leftSlot={ <Logo /> }
        rightSlot={'channels components will be here'}
      />

      {/* Temp wrapper, will be replaced with content component */}
      <div className="content">
          <div className="container">
              <Feed posts={feedStub}/>
          </div>
      </div>
    </div>
  );
}

export default App;
