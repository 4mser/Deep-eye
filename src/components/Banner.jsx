import React, { useState, useEffect } from "react";


const Banner = ({theme}) => {

    const sensitivity = window.innerWidth > 1000 ? { x: 200, y: 200 } : { x: 30, y: 30 };

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
    let y = 0;
    let limitedX = 0;
    let limitedY = 0;
    x = (position.x - window.innerWidth / 2) / sensitivity.x;
    y = (position.y - window.innerHeight / 2) / sensitivity.y;
    limitedX = Math.min(Math.max(x, -25), 25);
    limitedY = Math.min(Math.max(y, -25), 25);

    return (
        <div>
            <section className="banner-container">

                <div className={theme=== 'dark' ? 'banner-dark' : 'banner-light'}
                style={{
                    transform: `translate(${-limitedX}%, ${-limitedY}%)`,
                    transition: "transform .1s ease-out",
                }}>
                    <img src="\src\assets\images\imgBanner-02.png" alt="Deep-Eye-logo" border="0"/>

                </div>          

            </section>

        </div>
    )
}

export default Banner