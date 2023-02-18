import React, { useState, useEffect } from "react";

const BannerEye = ({theme}) => {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [orientation, setOrientation] = useState(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };
    const handleOrientation = (event) => {
      setPosition({
        x: (event.gamma + 90) * 3,
        y: (event.beta + 90) * 5,
      });
    };
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

  useEffect(() => {
    const handleOrientationChange = () => {
      setOrientation(window.screen.orientation.type);
    };
    window.addEventListener("orientationchange", handleOrientationChange);
    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  const sensitivity =
    window.innerWidth > 1000
      ? { x: 100, y: 10 }
      : orientation === "landscape-primary" || orientation === "landscape-secondary"
      ? { x: 10, y: 10 }
      : { x: 10, y: 10 };
  
  let x = 0;
  let y = 0;
  let limitedX = 0;
  let limitedY = 0;
  x = (position.x - window.innerWidth / 2) / sensitivity.x;
  y = (position.y - window.innerHeight / 2) / sensitivity.y;
  limitedX = Math.min(Math.max(x, -25), 25);
  limitedY = Math.min(Math.max(y, -25), 25);



    return (
            <section className="banner-eye-container">

                <div className={theme=== 'dark' ? 'banner-eye-dark' : 'banner-eye-light'}
                style={{
                    transform: `translate(${limitedX}%, ${limitedY}%)`,
                    transition: "transform .5s ease-out",
                }}>
                </div>          

            </section>

    )
}

export default BannerEye