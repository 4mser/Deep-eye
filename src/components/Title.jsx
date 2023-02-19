import React, { useState, useEffect } from "react";

const Title = ( ) => {

  const sensitivity = window.innerWidth > 700 ? { x: 200, y: 20 } : { x: 10, y: 10 };

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleOrientation = (event) => {
    setPosition({
      x: (event.gamma + 90) * 5,
      y: (event.beta + 90) * 5,
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
        <section className="home-page-title">
          <section className="title" style={{
            transform: `translate(${-limitedX}%, ${-limitedY}%)`,
            transition: "transform 0.1s ease-out",
          }}>
          </section>
        </section>
    )
}

export default Title