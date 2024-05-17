// HomePage.jsx
import React, { useState } from "react";
import {
  Paper,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  DialogContent,
} from "@mui/material";
import { styled } from "@mui/system";
import ContactUs from "./ContactUs";
import Streaming from "./Streaming";
import Media from "./Media";

const HeroSection = styled(Paper)({
  position: "relative",
  fontSize:'',
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  textAlign: "center",
  padding: "20%",
  boxShadow: "none",
  marginTop: "-5%",
  borderRadius: 0,
  border: "none",
  background: `url('grnblob.svg')`,
  backgroundSize: "cover",
  "@media (max-width: 768px)": {
    height: "100vh",
  },
});

const Image = styled("img")({
  width: "20%",
  height: "20%",
  borderRadius: "50%",
  transition: "transform 0.3s ease-in-out",

  "&:hover": {
    transform: "scale(1.1)", // Increase img size on hover
  },
  "@media (max-width: 768px)": {
    width: "45%",
    height: "45%",
  },
});

const ModalContainer = styled(DialogContent)({
  display: "flex",
  background: '#001220',
  flexDirection: "column",
  alignItems: "center",
});

const Modal = ({ isOpen, onClose, image, name, bio, inst }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth={false}>
      <ModalContainer>
        <Card>
          <CardMedia
            component="img"
            height="200"
            width="50"
            image={image}
            alt={name}
          />
          <CardContent>
            <Typography variant="h5">{name}</Typography>
            <Typography variant="body1">{inst}</Typography>
            <Typography variant="body2">{bio}</Typography>
          </CardContent>
        </Card>
      </ModalContainer>
    </Dialog>
  );
};

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/pics/compressed/Nat.jpg",
    "/pics/compressed/drewhead.jpg",
    "/pics/compressed/aj.jpg",
    "/pics/compressed/col.jpg",
  ];
  const names = [
    "Nathaniel Lee",
    "Drew Stogsdill",
    "AJ Seadler",
    "Colton Walkup",
  ];
  const bios = [
    "", //nat
    "", //drew
    "", //aj
    "", //col
  ];
  const inst = [
    "Drums",
    "Lead Vocals and Guitar",
    "Lead Guitar",
    "Bass Guitar",
  ];

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePos({ x: clientX, y: clientY });
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="home-pg">
      {/* Hero Section */}
      <HeroSection
        elevation={1}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="custom-font ds">
          <h3>DISCO STRANGER</h3>
        </div>
        <div className="images-container">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
        {/* <Typography variant="h4" style={{ marginTop: '150%', display: 'block', textAlign: 'center' }}>STRANGER</Typography> */}

        <div className="hero-text-fade-in">
          {/* idk if i'll use this section */}
        </div>
      </HeroSection>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        image={images[selectedImage]}
        name={names[selectedImage]}
        bio={bios[selectedImage]}
        inst={inst[selectedImage]}
      />

      {/* This section follows the hero section */}
      <Paper
        className="video-section"
        elevation={1}
        style={{
          padding: "20px",
          marginTop: "0px",
          background: `url(/2.svg)`,
          backgroundSize: "cover",
          borderRadius: 0,
          boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
          border: "none",
        }}
      >
        

        <Media />

        <Streaming />
        
        <ContactUs />
      </Paper>
    </div>
  );
};

export default Home;
