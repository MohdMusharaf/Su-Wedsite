import React from 'react';
import './App.css';
import Header from './components/first-header/header';
import SecondHeader from './components/second-header/secondHead';
import ThirdHeader from './components/Third-Header/thirdHeader';
import BodyPosterOne from './components/body-poster/body-poster';

import Mobile from './components/mobiles/mobile';
import Footer from './components/footer/footer';


function App() {
  
  return (
  
      <div>
        <div className='header-div'>
          <Header />
          <SecondHeader />
          <ThirdHeader />
        </div>
        <div>
          <BodyPosterOne />
          <Mobile />
          
        </div>
        <Footer />
        
      </div>
    
  );
}

export default App;
