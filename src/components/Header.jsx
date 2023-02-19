import  { React, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

/* -- Icons -- */
import { MdNightlight } from 'react-icons/md'
import { HiSun } from 'react-icons/hi'
/* ---- */



const Header = ({ onThemeChange, theme }) => {

const sensitivity = window.innerWidth > 1000 ? { x: 120} : { x: 1000};

  const [position, setPosition] = useState({ x: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
    })
  }



  useEffect(() => {
    if (window.innerWidth > 1000) {
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
        };
      } else {
        window.addEventListener("deviceorientation", handleOrientation);
        return () => {
          window.removeEventListener("deviceorientation", handleOrientation); 
        };
      }
    }, []);

    let x = 0;
    let limitedX = 0;
    x = (position.x - window.innerWidth / 2) / sensitivity.x;
    limitedX = Math.min(Math.max(x, -25), 25);

    

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
        setIsMenuOpen(!isMenuOpen); 
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
                        <li className={`secciones ${isMenuOpen ? 'active' : ''}`} onClick={handleSections}>SECCIONES <span>▼</span> 
                            <ul className={`hidden-menu ${isMenuOpen ? 'active' : ''}`} style={{
            transform: `translate(${-limitedX}%`,
            transition: "transform 0.1s ease-out",
          }}>
                                
                                <Link to='/deep-eye/tips&trips/'><li><p>Tips & Trips</p> <img src="https://s3.amazonaws.com/skybar.database.teset.1/psychedelic-eye.gif" alt="" /></li></Link>

                                <Link to='/deep-eye/psi&neuro/'><li><p>Psicología & Neurociencia</p>  <img src="https://s3.amazonaws.com/skybar.database.teset.1/MRI-brain-wp.gif" alt="" /></li></Link>

                                <Link to='/deep-eye/psicodelicos/'><li><p>Psicodélicos</p> <img src="https://s3.amazonaws.com/skybar.database.teset.1/dc7uw9n-135a4c5d-11da-47c4-8eae-d29111d07fbe.gif" alt="" /></li></Link>

                                <Link to='/deep-eye/meditacion/'><li><p>Meditación & Respiración</p> <img id='meditation-gif' src="https://s3.amazonaws.com/skybar.database.teset.1/409F.gif" alt="" /></li></Link>

                                <Link to='/deep-eye/respiracion'><li><p>Inteligencia Artificial</p>  <img src="https://s3.amazonaws.com/skybar.database.teset.1/GIF3.gif" alt="" /></li></Link>

                                <Link to='/deep-eye/sueños/'><li><p>Sueños</p>  <img src="https://s3.amazonaws.com/skybar.database.teset.1/dr-strange-trippy.gif" alt="" /></li></Link>

                                <Link to='/deep-eye/arte/'><li><p>Arte & Diseño</p>  <img src="https://s3.amazonaws.com/skybar.database.teset.1/8cbd7e449e8cbcd45368837ebab7ba5b.gif" alt="" /></li></Link>


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