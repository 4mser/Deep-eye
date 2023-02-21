import PsicoCards from "../components/PsicoCards"

import React, { useState, useEffect } from 'react';



const Psicodelicos = () => {

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
        <section className="seccion-psicodelicos">
            <div className="banner-seccion-psicodelicos" >
                <img src="https://s3.amazonaws.com/skybar.database.teset.1/dc7uw9n-135a4c5d-11da-47c4-8eae-d29111d07fbe.gif" alt=""  />
            </div>
            <div className="titulo" >
                <h1 style={{
                transform: `translate(${limitedX}%, ${limitedY}%)`,
                transition: "transform 0.1s ease-out",
                }}>PSICODÉLICOS</h1>
            </div>
            <PsicoCards></PsicoCards>
        </section>
    )
}

export default Psicodelicos