import React from 'react';
import { FaTshirt, FaBeer, FaStickerMule } from 'react-icons/fa'; // Icons from React Icons
import '../styles/Merch.css'; // External CSS file for styling

const merchItems = [
  {
    name: 'T-shirt',
    images: ['/pics/merch/tshirt-front.png', '/pics/merch/tshirt-back.png'],
    icon: <FaTshirt />,
    description: 'High-quality cotton T-shirt, perfect for any occasion.',
    price: '$20.00',
  },
  {
    name: 'Koozie',
    images: ['/pics/merch/koozie-transparent.png'],
    icon: <FaBeer />,
    description: 'Keep your drinks cold in style with this awesome koozie.',
    price: '$5.00',
  },
  {
    name: 'Sticker',
    images: ['/pics/merch/sticker(transparent).png'],
    icon: <FaStickerMule />,
    description: 'Durable, weatherproof sticker for your laptop or car.',
    price: '$2.00',
  },
];

const Merch = () => {
  return (
    <>
    <div className="merch-container">
      <h2 className="merch-title">Merch</h2>

      

      <div className="merch-grid">
        {merchItems.map((item, index) => (
          <div key={index} className="merch-card">
            <div className="merch-images">
              {item.images.map((img, idx) => (
                <img 
                  key={idx} 
                  src={img} 
                  alt={`${item.name} ${idx + 1}`} 
                  className={`merch-image ${item.name.toLowerCase()}`} 
                />
              ))}
            </div>
            <div className="merch-info">
              <h3 className="merch-name">{item.name}</h3>
              <p className="merch-description">{item.description}</p>
              <p className="merch-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    
    <div className="merch-info-container">
    <p className="merch-info">
      Note: Merchandise is only available for purchase at our shows! 
      If you're a local fan and would like to buy merch, please email us at 
      <a href="mailto:discostrangermusic@gmail.com" className="merch-email"> discostrangermusic@gmail.com</a>.
    </p>
  </div>
  </>
  );
};

export default Merch;
