import React, { useState } from 'react';
import './ContactInformation.css'; // Sayfa özel CSS dosyanızı ekleyin

const Bilgi = () => {
    const [metin, setMetin] = useState('');

     
 

  return (
    <div >
        <h2 ><bold>Proje Hakkında Genel Bilgi</bold></h2>
            <p className='p1'>Projemizin Adı "BurCev"</p>
            <p className='p1'>Projede amaç;bu websitesi ile daha fazla çevremize dikkat ederek Yeşil Bursa için çalışmalar yapmak. </p>
            <p className='p1'> Projede teknoloji olarak React.js ,arayüz tasarımı için Arayüz kütüphanelerinden Bootstrap teknolojisi kullanılmıştır.</p>
            <p className='p1'>Uygulama içerisinde sayfa yönlendirmeleri için React DOM kullanılmıştır.</p>
            <p className='p1'>"Problem Gönder" sekmesinde çevrenizde gördüğünüz problemi resim ekleyerek ve problemin tanımını yazarak yetkililere ulaşmasını sağlayacaktır.Projede Google MAP API kullanılarak bulunduğunuz yerin konumunu işaretleyerek yerinizi belirlemiş olursunuz </p>
            <p className='p1'>"Uygulama Nasıl Çalışır" sekmesinde websitenin nasıl çalışıldığı açıklanmıştır.</p>
            <p className='p1'>"Atık Toplama" sekmesinde Bursa veri merkezinden sağlanan API'ler kullanılarak Bursa İlçelerine göre toplanan atık miktarları tabloda gösterilmiştir.</p>
            <p className='p1'>Bu sayede geri dönüşüm için atıkların toplanması konusunda istek-öneri formu yapılmıştır. </p>
        <h2 ><bold>Kendim Hakkında Bilgi</bold></h2>
        <p className='p1'>Yeditepe Üniversitesi Elektrik-Elektonik Mühendisliği -2015  </p>
        <p className='p1'> İletişim Bilgilerim</p>
        <p className='p1'>Telefon :05432146024</p> 
        <p className='p1'>E-posta:hizarciceren4@gmail.com</p> 
        <p className='p1'>Linkedin: <a href="https://www.linkedin.com/in/bcerenh" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/bcerenh</a></p> 
            <p className='p1'>Github: <a href="https://www.github.com/bcerenh" target="_blank" rel="noopener noreferrer">https://www.github.com/bcerenh</a></p> 
      </div>
  
   
  );
};

export default Bilgi;
