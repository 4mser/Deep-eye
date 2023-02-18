/* import React, { useState, useEffect } from "react";


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
                    <img src="https://s3.amazonaws.com/skybar.database.teset.1/imgBanner-02.png" alt="Deep-Eye-logo" border="0"/>

                </div>          

            </section>

        </div>
    )
}

export default Banner */

import React, { useState, useEffect } from "react";

const Banner = ({theme}) => {

/*   const [position, setPosition] = useState({ x: 0, y: 0 });
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
        x: (event.gamma + 90) * 5,
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
      ? { x: 10, y: 20 }
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
  limitedY = Math.min(Math.max(y, -25), 25); */

  const sensitivity = window.innerWidth > 1000 ? { x: 10, y: 20 } : { x: 2, y: 2 };

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
        <div
          className={theme === "dark" ? "banner-dark" : "banner-light"}
          /* style={{
            transform: `translate(${-limitedX}%, ${-limitedY}%)`,
            transition: "transform 1s ease-out",
          }} */
        >
          <img
            src="https://s3.amazonaws.com/skybar.database.teset.1/imgBanner-02.png"
            alt="Deep-Eye-logo"
            border="0"
          />

          <div className={theme === "dark" ? "banner-eye-dark" : "banner-eye-light"}
          style={{
            transform: `translate(${limitedX}%, ${limitedY}%)`,
            transition: "transform .3s ease-out",
          }}>
            {/* <div className={theme === "dark" ? "pupila-dark" : "pupila-light"}
            style={{
              transform: `translate(${limitedX}%, ${limitedY}%)`,
              transition: "transform .1s ease-out",
            }}></div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
