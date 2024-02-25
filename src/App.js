// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; // axios'u burada import etmeyi unutmayın
import './App.css';
import Home from "./pages/Home/Anasayfa";
import GoogleMapComponent from "./pages/MapContainer/MapContainer";
import Data from "./pages/Atik/veri";
import Work from "./pages/HowItWorks/HowItWorks"; 
import Info from "./pages/ContactInformation/ContactInformation";

const Anasayfa = () => (
  <div>
   <Home/>
  </div>
);

const MapContainer = () => (
  <div>
  <GoogleMapComponent />
  </div>
);

const Howitworks = () => (
  <div>
    <Work/>
  </div>
);

const Atik = () => (
  <div>
   <Data/>
  </div>
);

const Contact = () => (
  <div>
    <Info/>
  </div>
);

const UyeOl = () => {
  const [kullaniciAdi, setKullaniciAdi] = useState('');
  const [sifre, setSifre] = useState('');

  const handleUyeOl = async () => {
    try {
      const response = await axios.post('http://localhost:3001/uye-ol', { kullaniciAdi, sifre });
      if (response && response.data) {
        console.log(response.data);
        alert('Üye kaydı başarılı.');
      } else {
        console.error('API cevabında beklenen veri yok.');
        alert('Üye kaydı başarısız.');
      }
    } catch (error) {
      console.error('Hata:', error.message);
      alert('Üye kaydı başarısız.');
    }
  };
  

  return (
    <div>
      <h2>Üye Ol</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formKullaniciAdi">
          <Form.Label>Kullanıcı Adı</Form.Label>
          <Form.Control type="text" placeholder="Kullanıcı Adı" value={kullaniciAdi} onChange={(e) => setKullaniciAdi(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSifre">
          <Form.Label>Şifre</Form.Label>
          <Form.Control type="password" placeholder="Şifre" value={sifre} onChange={(e) => setSifre(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleUyeOl}>
          Üye Ol
        </Button>
      </Form>
    </div>
  );
};

const UyeGirisi = () => {
  const [kullaniciAdi, setKullaniciAdi] = useState('');
  const [sifre, setSifre] = useState('');

  const handleUyeGirisi = async () => {
    try {
      // Axios ile backend'e üye girişi isteği gönderme
      await axios.post('http://localhost:3001/uye-giris', { kullaniciAdi, sifre });
      alert('Giriş başarılı.');
    } catch (error) {
      alert('Hata: ' + error.response.data);
    }
  };

  return (
    <div>
      <h2>Üye Girişi</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formKullaniciAdi">
          <Form.Label>Kullanıcı Adı</Form.Label>
          <Form.Control type="text" placeholder="Kullanıcı Adı" value={kullaniciAdi} onChange={(e) => setKullaniciAdi(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSifre">
          <Form.Label>Şifre</Form.Label>
          <Form.Control type="password" placeholder="Şifre" value={sifre} onChange={(e) => setSifre(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleUyeGirisi}>
          Giriş Yap
        </Button>
      </Form>
    </div>
  );
};

const App = () => (
  <Router>
    <Navbar bg="dark" variant="light">
      <Container className="navbar-container">
        <Navbar.Brand as={Link} to="/">Yeşil Bursa , Yeşil Çevre</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Ana Sayfa</Nav.Link>
          <Nav.Link as={Link} to="/MapContainer">Problem Gönder</Nav.Link>
          <Nav.Link as={Link} to="/Howitworks">Uygulama Nasıl Çalışır</Nav.Link>
          <Nav.Link as={Link} to="/Atik">Atık Toplama</Nav.Link>
          <Nav.Link as={Link} to="/Contact">İletişim</Nav.Link>
          </Nav>
        <Nav>
          <Nav.Link as={Link} to="/UyeOl">Üye Ol</Nav.Link>
          <Nav.Link as={Link} to="/UyeGirisi">Üye Girişi</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    <Container className="mt-3">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MapContainer" element={<MapContainer />} />
        <Route path="/Howitworks" element={<Howitworks />} />
        <Route path="/Atik" element={<Atik />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/UyeOl" element={<UyeOl />} />
        <Route path="/UyeGirisi" element={<UyeGirisi />} />
      </Routes>
    </Container>
  </Router>
);

export default App;
