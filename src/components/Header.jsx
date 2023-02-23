import  { React, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

/* -- Icons -- */
import { MdNightlight, MdOutlineDashboard, MdDashboard, MdOutlineAnnouncement, MdAnnouncement } from 'react-icons/md'
import { HiSun } from 'react-icons/hi'
import {AiFillHome, AiOutlineHome} from 'react-icons/ai'
import {RiFileInfoFill} from 'react-icons/ri'
import {RiShoppingCart2Line, RiShoppingCart2Fill} from 'react-icons/ri'
import {RxMoon} from 'react-icons/rx'
/* ---- */



const Header = ({ onTemaChange, tema }) => {

    const location = useLocation();

    

    let iconoInicio = location.pathname === '/deep-eye/' ? <AiFillHome className='icon' /> : <AiOutlineHome className='icon' />;
  let iconoSobre = location.pathname === '/deep-eye/sobre/' ? <MdAnnouncement className='icon' /> : <MdOutlineAnnouncement className='icon' />;
  let iconoTienda = location.pathname === '/deep-eye/tienda/' ? <RiShoppingCart2Fill className='icon' /> : <RiShoppingCart2Line className='icon' />;



const sensitivity = window.innerWidth > 1000 ? { x:85} : { x: 10000};

  const [position, setPosition] = useState({ x: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
    })
  }

  const handleOrientation = (event) => {
    setPosition({
      x: (event.gamma + 90) * 5,
      y: (event.beta + 90) * 5,
    });
  };

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
                    <div className={tema=== 'dark' ? 'logo-dark' : 'logo-light'}>
                        <img src="https://s3.amazonaws.com/skybar.database.teset.1/DELOGO-10.png" alt=""/>
                    </div>
                </Link>


                <div className={`nav-container ${isOpen ? 'active' : ''}`}>

                    <div className={`bg-sections ${isMenuOpen ? 'active' : ''}`} onClick={handleSections}></div>

                    <ul className={`nav ${tema === 'dark' ? 'dark' : 'light'}`}>

                        <li>
                            <Link to='/deep-eye/' onClick={handleClick}> 
                                <div className="icon-p">
                                    {iconoInicio}
                                    <p>Inicio</p>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link to='/deep-eye/sobre/' onClick={handleClick}>
                                <div className="icon-p">
                                    {iconoSobre} 
                                    <p>Sobre</p>
                                </div> 
                            </Link>
                        </li>

                        <li className={`secciones ${isMenuOpen ? 'active' : ''}`} onClick={handleSections}>

                            <div className="icon-p">

                            {isMenuOpen ? (
                                <MdDashboard className='icon'></MdDashboard> 
                            ) : (
                                <MdOutlineDashboard className='icon'></MdOutlineDashboard> 
                            )}

                                

                                <p className='secciones-p'>Secciones <span className='arrow-sections'>▼</span></p>
                                
                            </div>

                            <ul className={`hidden-menu ${isMenuOpen ? 'active' : ''}`} 
                                style={{ transform: `translate(${-limitedX}%`,
                                transition: "transform 0.1s ease-out" }}>
                                
                                <Link to='/deep-eye/tips&trips/' onClick={handleClick}>
                                    <li>
                                        <p>Tips & Trips</p> 
                                        <img src="https://s3.amazonaws.com/skybar.database.teset.1/psychedelic-eye.gif" alt="" />
                                    </li>
                                </Link>

                                <Link to='/deep-eye/psi&neuro/' onClick={handleClick}>
                                    <li>
                                        <p>Psicología & Neurociencia</p>  
                                        <img src="https://s3.amazonaws.com/skybar.database.teset.1/MRI-brain-wp.gif" alt="" />
                                    </li>
                                </Link>

                                <Link to='/deep-eye/psicodelicos/' onClick={handleClick}>
                                    <li id='psicodelicos'>
                                        <p>Psicodélicos</p> 
                                        <img src="https://s3.amazonaws.com/skybar.database.teset.1/dc7uw9n-135a4c5d-11da-47c4-8eae-d29111d07fbe.gif" alt="" />
                                    </li>
                                </Link>

                                <Link to='/deep-eye/meditacion/' onClick={handleClick}>
                                    <li>
                                        <p>Meditación & Respiración</p> 
                                        <img id='meditation-gif' src="https://s3.amazonaws.com/skybar.database.teset.1/409F.gif" alt="" />
                                    </li>
                                </Link>

                                <Link to='/deep-eye/respiracion' onClick={handleClick}>
                                    <li>
                                        <p>Inteligencia Artificial</p>  
                                        <img src="https://s3.amazonaws.com/skybar.database.teset.1/GIF3.gif" alt="" />
                                    </li>
                                </Link>

                                <Link to='/deep-eye/sueños/' onClick={handleClick}>
                                    <li>
                                        <p>Sueños</p>  
                                        <img src="https://s3.amazonaws.com/skybar.database.teset.1/dr-strange-trippy.gif" alt="" />
                                    </li>
                                </Link>

                                <Link to='/deep-eye/arte/' onClick={handleClick}>
                                    <li>
                                        <p>Arte & Diseño</p>  
                                        <img src="https://s3.amazonaws.com/skybar.database.teset.1/8cbd7e449e8cbcd45368837ebab7ba5b.gif" alt="" />
                                    </li>
                                </Link>

                                <Link to='/deep-eye/arte/' onClick={handleClick}>
                                    <li>
                                        <p>Contenido recomendado</p>  
                                        <img src="https://s3.amazonaws.com/skybar.database.teset.1/pretty-book-bench-nature-water-outdoors-animated-gif.gif" alt="" />
                                    </li>
                                </Link>




                            </ul>
                        </li>

                        <li>
                            {/* <Link to='/deep-eye/tienda/' onClick={handleClick}> 
                                <div className="icon-p">
                                    {iconoTienda}
                                    <p>Tienda</p>
                                </div>
                            </Link> */}
                            <a href="https://imminent-bandicoot-de3.notion.site/Tienda-052cb9b6a19341bcac3a5ddb0f7c8bfb" target='_blank'>
                                <div className='icon-p'>
                                    {iconoTienda}
                                    <p>Tienda</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>


                <div className='header-icons'>
                    {tema === 'light' ? (
                        <HiSun className="theme-light" onClick={onTemaChange} />
                    ) : (
                        <MdNightlight className="theme-dark" onClick={onTemaChange} />
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