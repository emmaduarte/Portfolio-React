import React from "react";
import Header from "./componentes/header/Header";
import Nav from "./componentes/nav/Nav";
import SobreMi from "./componentes/sobreMi/SobreMi";
import Experiencia from "./componentes/experiencia/Experiencia";
import Porfolio from "./componentes/portfolio/Portfolio";
import Contacto from "./componentes/contacto/Contacto";
import Footer from "./componentes/footer/Footer";
import {BrowserRouter, Route, Routes,} from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter basename="Portfolio-React">
        <Nav />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/SobreMi"  element={<SobreMi />} />
          <Route path="/Experiencia"  element={<Experiencia />} />
          <Route path="/Portfolio"  element={<Porfolio />} />
          <Route path="/Contacto"  element={<Contacto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
