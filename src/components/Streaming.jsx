import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const StyledIframe = styled.iframe`
  border-radius: 0px;
  margin-bottom: 10px;
  margin: auto;
  width: 90%;
  height: 450px;
  border: 0;
  allowfullscreen: "";
  allow: autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture;
  loading: lazy;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

const Streaming = () => {
  return (
    <Container>
      <StyledIframe
        src="https://open.spotify.com/embed/artist/3SwSE7OtWzLOrc32Eq54gO?utm_source=generator&theme=0"
      />
    </Container>
  );
};

export default Streaming;
