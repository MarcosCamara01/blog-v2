import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
      <div className="content-footer">
        <div className="top-footer">
          <span className="logo navLogo"><Link to={"/inicio"}>Chpanth</Link></span>
          <div className="media-icons">
            <span href="#"><i className='bx bxl-twitter'></i></span>
            <span href="#"><i className='bx bxl-instagram'></i></span>
          </div>
        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">Creado y diseñado por <a href="https://portfoliomarcos.com/">Marcos Cámara.</a></span>
        </div>
      </div>
    </footer>
  )
}
