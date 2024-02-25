import React, { useState } from 'react';
import './HowItWorks.css'; // Sayfa özel CSS dosyanızı ekleyin

const Adim = () => {
    const [metin, setMetin] = useState('');

 

  return (
    <div className='container' >
    {/* İlk üç adım */}
    <div className="flex">
      <div className="step">
      <h4 className='h1'>Adım 1</h4>
        <p>Problemi farkedin</p>
        <img src="assets/img/portfolio/Step-1.png" ></img>
      </div>
      <div className="step">
        <h4 className='h1'>Adım 2</h4>
        <p>Web sitesine Giriş yapın ve harita konumunu seçin</p>
        <img src="assets/img/portfolio/Step-2.png" ></img>
      </div>
      <div className="step">
      <h4 className='h1'>Adım 3</h4>
        <p>Bazı temel bilgileri girin ve raporu gönderin </p>
        <img src="assets/img/portfolio/Step-3.png" ></img>
      </div>
    </div>
      </div>
  
   
  );
};

export default Adim;
