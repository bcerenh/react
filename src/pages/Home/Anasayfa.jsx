import React from 'react';
import './Anasayfa.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
  <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

      <div className="carousel-inner" role="listbox">
        {/* Slide 1 */}
        <div className="carousel-item active" style={{ backgroundImage: 'url(assets/img/slide/anasayfa.jpg)' }}>
          <div className="carousel-container">
            <div className="container">
              <h1 className="animate__animated animate__fadeInDown"><span>Daha Güzel Bir Bursa İçin</span></h1>
              <p className="animate__animated animate__fadeInUp"></p>
              {/* <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a> */}
            </div>
          </div>
        </div>

      

     
      
    </div>
    </div>
  );
}


export default Home;
