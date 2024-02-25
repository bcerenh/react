import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './MapContainer.css'; // CSS dosyanızı ekleyin


const MyLocationMap = () => {
  const [map, setMap] = useState(null);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [showMessageBox, setShowMessageBox] = useState(false);

  useEffect(() => {
    const loadMapScript = () => {
      // Check if the Google Maps API script has already been added
      if (!window.google) {
        const script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCRFfrOBEXXr2EabgXFLlKLHS7y1lg3Y0k';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);

        script.addEventListener('load', () => {
          // Initialize the map after the script is loaded
          initMap();
        });
      } else {
        // If the script is already loaded, initialize the map directly
        initMap();
      }
    };

    const initMap = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            // Harita oluşturuluyor
            const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
              center: userLocation,
              zoom: 15,
            });

            // Kullanıcının konumuna bir işaretçi ekleniyor
            const marker = new window.google.maps.Marker({
              position: userLocation,
              map: mapInstance,
              title: 'Your Location',
            });

            setMap(mapInstance);
          },
          (error) => {
            console.error('Error getting user location:', error);
          }
        );
      } else {
        alert('Geolocation is not supported by this browser.');
      }
    };

    // Load the Google Maps API script when the component mounts
    loadMapScript();

    return () => {
      // Clean up: remove the script when the component unmounts
      const googleScript = document.querySelector('[src^="https://maps.googleapis.com/maps/api/js"]');
      if (googleScript) {
        document.head.removeChild(googleScript);
      }
    };
  }, []); // useEffect sadece bir kez çalışsın diye boş bağımlılık dizisi kullanıldı

  const handleMarkerClick = () => {
    // Resim, tanım ve konumu göndermek için burada işlemleri gerçekleştirebilirsiniz
    console.log('Resim:', image);
    console.log('Tanım:', description);
    console.log('Konum:', map.getCenter());

  };





  return (
    <div>
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
      <div style={{ marginTop: '20px' }}>
        <h1>Bu Konum İçin Resim Gönder</h1>
        <label>
          Resim:
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </label>
        <br />
        <label>
          Problemi Tanımla:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <button onClick={handleMarkerClick}>Gönder</button>
      
      </div>
    </div>
  );
};

export default MyLocationMap;
