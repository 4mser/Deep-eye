import  { React, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

/* -- Icons -- */
import { MdNightlight } from 'react-icons/md'
import { HiSun } from 'react-icons/hi'
/* ---- */



const Header = ({ onThemeChange, theme }) => {

    

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
      }
    

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleSections = () => {
        setIsMenuOpen(!isMenuOpen); // Cambia el estado al valor opuesto
    }

    return (
        <section>
            <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                
                <Link to='/deep-eye/'>
                    <div className={theme=== 'dark' ? 'logo-dark' : 'logo-light'}>
                        <img src="https://s3.amazonaws.com/skybar.database.teset.1/DELOGO-10.png" alt=""/>
                    </div>
                </Link>


                <div className={`nav-container ${isOpen ? 'active' : ''}`}>
                    <ul className='nav'>
                        <li><Link to='/deep-eye/'>INICIO</Link></li>
                        <li><Link to='/deep-eye/sobre/'>SOBRE</Link></li>
                        <li className='secciones' onClick={handleSections}>SECCIONES ▼ 
                            <ul className={`hidden-menu ${isMenuOpen ? 'active' : ''}`}>
                                <Link to='/deep-eye/tips&trips/'><li>Tips & Trips</li></Link>
                                <Link to='/deep-eye/psicodelicos/'><li>Psicodélicos</li></Link>
                                <Link to='/deep-eye/meditacion/'><li>Meditación</li></Link>
                                <Link to='/deep-eye/respiracion'><li>Respiración</li></Link>
                                <Link to='/deep-eye/sueños/'><li>Sueños</li></Link>
                                <Link to='/deep-eye/arte/'><li>Diseño</li></Link>
                            </ul>
                        </li>
                        <li><Link to='/deep-eye/tienda/'>TIENDA</Link></li>
                    </ul>
                </div>


                <div className='header-icons'>
                    {theme === 'light' ? (
                        <HiSun className="theme-light" onClick={onThemeChange} />
                    ) : (
                        <MdNightlight className="theme-dark" onClick={onThemeChange} />
                    )}

                    <div className={`menu-btn ${isOpen ? 'open' : ''}`}  onClick={handleClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

            </header>


        </section>
    )
}

export default Header