
import React, { useState, useEffect } from 'react';

import ArticulosTienda from "../components/ArticulosTienda";



const Tienda = () => {

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
        <section className="tienda">
            <div className="banner-tienda" ></div>
            <div className="titulo-tienda" >
                <h1 style={{
                transform: `translate(${limitedX}%, ${limitedY}%)`,
                transition: "transform 0.1s ease-out",
                }}>Tienda</h1>
            </div>
            <ArticulosTienda></ArticulosTienda>
        </section>
    )
}

export default Tienda