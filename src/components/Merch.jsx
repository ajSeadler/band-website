import React from 'react';
import { FaTshirt, FaBeer, FaStickerMule } from 'react-icons/fa'; // Icons from React Icons
import '../styles/Merch.css'; // External CSS file for styling

const merchItems = [
  {
    name: 'T-shirt (Front)',
    image: '/pics/merch/tshirt-front.png',
    icon: <FaTshirt />,
  },
  {
    name: 'T-shirt (Back)',
    image: '/pics/merch/tshirt-back.png',
    icon: <FaTshirt />,
  },
  {
    name: 'Koozie',
    image: '/pics/merch/koozie-transparent.png',
    icon: <FaBeer />,
  },
  {
    name: 'Sticker',
    image: '/pics/merch/sticker(transparent).png',
    icon: <FaStickerMule />,
  },
];

const Merch = () => {
  return (
    <div className="merch-container">
      <h2 className="merch-title">Merch</h2>
      <div className="merch-grid">
        {merchItems.map((item, index) => (
          <div key={index} className="merch-card">
            {/* <div className="merch-icon">{item.icon}</div> */}
            <img src={item.image} alt={item.name} className="merch-image" />
            <div className="merch-name">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Merch;
