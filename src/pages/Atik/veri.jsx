import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import './veri.css';

const ExcelDataComponent = () => {
  const [excelData, setExcelData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [suggestion, setSuggestion] = useState('');

  const fetchData = async (file) => {
    try {
      const response = await fetch(file);
      const data = await response.arrayBuffer();
      const arrayBuffer = new Uint8Array(data);
      const workbook = XLSX.read(arrayBuffer, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      const excelData = XLSX.utils.sheet_to_json(sheet);

      if (excelData.length > 0) {
        const firstRow = excelData[0];
        setHeaders(Object.keys(firstRow));
      }

      setExcelData(excelData);
    } catch (error) {
      console.error('Excel dosyası okunurken hata oluştu:', error);
    }
  };

  const handleButtonClick = (file) => {
    setSelectedFile(file);
    fetchData(file);
  };

  const handleSuggestionSubmit = () => {
    // İstek veya öneri verisini kullanarak istediğiniz işlemi gerçekleştirin
    console.log('İstek veya öneri:', suggestion);
    // Daha sonra state'i temizleyebilirsiniz
    setSuggestion('');
  };

  return (
    <div className="excel-data-container">
    
      <h2>Atıkları Azaltın Geri Dönüşüme Katkıda Bulunun</h2>
      <p>Plastik atıkların denizleri ve doğayı kirletmesini önlemek için, plastik kullanımını azaltmalı ve geri dönüşümü teşvik etmeliyiz. Atıkları ayrıştırarak geri dönüşüme katkıda bulunabilir, organik atıkları kompost yaparak doğaya fayda sağlayabiliriz.</p>
     
      <div className="image-container">
        <img className='image' src='assets/img/atik.png' alt='Atık Resmi' />
        <img className='image' src='assets/img/cevre.png' alt='Çevre Resmi' />
      </div>
     
      
     {/* <img className='.excel-data-container .image-container' src='assets/img/atik.png'></img>
     <img className='.excel-data-container .image-container' src='assets/img/cevre.png'></img> */}
    
     <p>Aşağıdaki butonlara tıklayarak Bursadaki İlçelere göre toplanan Atık Miktarlarını görebilir,Daha fazla atık toplanması konusunda istek ve öneri paylaşabilirsiniz</p>
     <div className="button-container">
        <button className='buton1'onClick={() => handleButtonClick('/toplanan_aeee_atik_miktarlari.xlsx')}>
        Bursa İlçelerine Göre Toplanan Elektrik-Elektronik Atık Miktarları
        </button>
        <button className='buton2'onClick={() => handleButtonClick('/2022_ilcelere_gore_toplanan_ambalaj_atik_miktarlari.xlsx')}>
        Bursa İlçelerine Göre Toplanan Ambalaj Atık Miktarları
        </button>
      </div>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {excelData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, headerIndex) => (
                <td key={headerIndex}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <form className="suggestion-form" onSubmit={(e) => e.preventDefault()}>
  <label htmlFor="suggestion">İstek veya Öneri:</label>
  <label>Şikayetleriniz için: 0224 444 16 00 </label>
  <textarea
    id="suggestion"
    name="suggestion"
    rows="4"
    placeholder="Lütfen isteğinizi veya önerinizi buraya yazın..."
    required
  ></textarea>

  <button type="submit" onClick={() => handleSuggestionSubmit()}>
    Gönder
  </button>
</form>
    </div>
  );
};

export default ExcelDataComponent;
