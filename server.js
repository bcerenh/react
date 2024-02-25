// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

mongoose.connect('mongodb://localhost:27017/uyeler', { useNewUrlParser: true, useUnifiedTopology: true });

const uyelerSchema = new mongoose.Schema({
  kullaniciAdi: String,
  sifre: String,
});

const Uye = mongoose.model('Uye', uyelerSchema);

app.use(bodyParser.json());

// Üye kaydı (üye olma) endpoint'i
app.post('/uye-ol', async (req, res) => {
  try {
    const yeniUye = new Uye(req.body);
    await yeniUye.save();
    res.status(201).send('Üye kaydı başarılı.');
  } catch (error) {
    res.status(500).send('Hata: ' + error.message);
  }
});

// Üye girişi (üye giriş) endpoint'i
app.post('/uye-giris', async (req, res) => {
  try {
    const { kullaniciAdi, sifre } = req.body;
    const uye = await Uye.findOne({ kullaniciAdi, sifre });
    if (uye) {
      res.status(200).send('Giriş başarılı.');
    } else {
      res.status(401).send('Geçersiz kullanıcı adı veya şifre.');
    }
  } catch (error) {
    res.status(500).send('Hata: ' + error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor...`);
});
