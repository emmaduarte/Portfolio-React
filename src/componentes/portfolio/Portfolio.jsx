import React from 'react'
import './porfolio.css'
import calculadora from '../../archivos/calculadora 2.jpg'
import movie from '../../archivos/movieplus.jpg'
import naturel from '../../archivos/naturel.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mis recientes trabajos</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={movie} alt="Imagen del trabajo" />
          </div>
          <h3>Movies</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/emmaduarte/movies" className='btn'>Github</a>
            <a href="https://emmaduarte.github.io/movies/" className='btn btn-primary' target='_blank'>Ver demo</a>
          </div>
          
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={calculadora} alt="Imagen del trabajo" />
          </div>
          <h3>Calculadora</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/emmaduarte/Calculadora" className='btn'>Github</a>
            <a href="https://emmaduarte.github.io/Calculadora/" className='btn btn-primary' target='_blank'>Ver demo</a>
          </div>
          
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={naturel} alt="Imagen del trabajo" />
          </div>
          <h3>Naturel Gourmet</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/PietroGianniRuggeri/naturel-gourmet" className='btn'>Github</a>
            <a href="https://naturel-gourmet.vercel.app/" className='btn btn-primary' target='_blank'>Ver demo</a>
          </div>
          
        </article>
      </div>
    </section>
  )
}

export default Portfolio