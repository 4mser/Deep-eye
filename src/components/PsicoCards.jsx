import { Link } from 'react-router-dom';

import React, { useState, useEffect } from 'react';


import psicodelicos from '../data-base/PsicodelicosData';




const PsicoCards = () => {

    const sensitivity = window.innerWidth > 1000 ? { x: 300, y: 100 } : { x: 50, y: 50 };

    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };
  
    const handleOrientation = (event) => {
      setPosition({
        x: (event.gamma) * 15,
        y: (event.beta) * 15,
      });
    };
  
    useEffect(() => {
      if (window.innerWidth > 700) {
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
      let y = 0;
      let limitedX = 0;
      let limitedY = 0;
      x = (position.x - window.innerWidth / 2) / sensitivity.x;
      y = (position.y - window.innerHeight / 2) / sensitivity.y;
      limitedX = Math.min(Math.max(x, -25), 25);
      limitedY = Math.min(Math.max(y, -25), 25);


    return (
        <div className="container-psicodelicos" >
            {psicodelicos.map(psicodelico => (
            <div key={psicodelico.id} className="psicodelico2" >
                <Link className='links-router' to={`/Deep-eye/psicodelicos/${psicodelico.url}`}>
                    <div className="psicodelico-img2">
                        <img src={psicodelico.image} alt="Psychedelic-image" style={{
                transform: `translate(${limitedX}%, ${-limitedY}%)`,
                transition: "transform 0.1s ease-out",
                }}/>
                        <p>{psicodelico.peligro}</p>
                    </div>
                    
                    <div>
                        <h2>{psicodelico.name}</h2>
                        <p>{psicodelico.info}</p>
                    </div>
                    <div className='btn-psicodelicos'>Ver más</div>
                </Link>
            </div>
            
        ))}
        
        </div>
    )
}

export default PsicoCards 