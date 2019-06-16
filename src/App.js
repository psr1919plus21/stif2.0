import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import Post from './components/Post/Post';

const newsStub = {
    title: 'Cute cat says meow',
    imgUrl: 'http://www.kartinki.me/pic/201306/1152x864/kartinki.me-12203.jpg',
    url: 'https://yandex.ru/images/search?text=cat&pos=4&img_url=https%3A%2F%2Fimg1.goodfon.com%2Foriginal%2F2600x1780%2Ff%2F29%2Fkot-ryzhiy-zevaet-cat-ginger.jpg&rpt=simage',
    description: 'Today at 10:00AM cute cat says meow and everyone was shocked. President didn\'\t comment incident yet.'
}

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
              <Post  {...newsStub} />
          </div>
      </div>
    </div>
  );
}

export default App;
