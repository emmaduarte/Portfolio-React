import React from "react";
import Header from "./componentes/header/Header";
import Nav from "./componentes/nav/Nav";
import SobreMi from "./componentes/sobreMi/SobreMi";
import Experiencia from "./componentes/experiencia/Experiencia";
import Porfolio from "./componentes/portfolio/Portfolio";
import Contacto from "./componentes/contacto/Contacto";
import Footer from "./componentes/footer/Footer";
import {
  BrowserRouter,
  Router,
  Route,
  Routes,
  HashRouter,
} from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <Header />
      <SobreMi />
      <Experiencia />
      <Porfolio />
      <Contacto />
      <Footer /> */}
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route exact path="/SobreMi"  element={<SobreMi />} />
          <Route exact path="/Experiencia"  element={<Experiencia />} />
          <Route exact path="/Portfolio"  element={<Porfolio />} />
          <Route exact path="/Contacto"  element={<Contacto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
