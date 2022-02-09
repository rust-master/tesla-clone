import React from "react";
import styleds from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <Container>
      <Section />
    </Container>
  );
}

export default Home;

const Container = styleds.div`
    height: 100vh;
    
`;
