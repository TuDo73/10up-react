import React from "react";

import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Top from "./components/Top";

function App() {
  return (
    <>
      <ParallaxProvider>
        <Top />
        <Main />
        <Footer />
      </ParallaxProvider>
    </>
  );
}

export default App;
