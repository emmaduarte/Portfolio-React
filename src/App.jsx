import React from 'react'
import Header from './componentes/header/Header'
import Nav from './componentes/nav/Nav'
import SobreMi from './componentes/sobreMi/SobreMi'
import Experiencia from './componentes/experiencia/Experiencia'
import Porfolio from './componentes/portfolio/Portfolio'
import Contacto from './componentes/contacto/Contacto'
import Footer from './componentes/footer/Footer'
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom"

const App = () => {
  return (
    
      
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route path='/Portfolio-React' exact element={<Header/>}/>
          <Route path='/SobreMi' exact element={<SobreMi/>}/>
          <Route path='/Experiencia' exact element={<Experiencia/>}/>
          <Route path='/Portfolio' exact element={<Porfolio/>}/>
          <Route path='/Contacto' exact element={<Contacto/>}/>

        </Switch>
        <Footer/>
      </BrowserRouter>

  
  )
}

export default App