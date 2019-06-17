import React from 'react';

import postStub from './stubs/post-stub';

import './App.scss';

import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import Post from './components/Post/Post';

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
              <Post  {...postStub} />
          </div>
      </div>
    </div>
  );
}

export default App;
