import React, { useState, useEffect } from 'react';

const Bg = ( { theme } )=> {
  const videoRef = React.useRef(null);
  useEffect(() => {
    videoRef.current.play();
  }, []);

  const sensitivity = window.innerWidth > 700 ? { x: 600, y: 100 } : { x: 10, y: 5 };


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

  const handleMotion = (event) => {
    setPosition({
      x: (event.accelerationIncludingGravity.x + 10) * 5,
      y: (event.accelerationIncludingGravity.y + 10) * 5,
    });
  };

  useEffect(() => {
  if (window.innerWidth > 700) {
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    } else if (window.DeviceMotionEvent) {
      window.addEventListener("devicemotion", handleMotion);
      return () => {
        window.removeEventListener("devicemotion", handleMotion);
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
        <div className={theme === 'light' ? 'bg light' : 'bg dark'}>
           <video  className={theme === 'light' ? 'bg-video light' : 'bg-video dark'}
                    ref={videoRef} loop muted playsInline style={{
                    transform: `translate(${-limitedX}%, ${-limitedY}%)`,
                    transition: "transform 0.1s ease-out",
                    }}>
                <source src="https://s3.amazonaws.com/skybar.database.teset.1/bg.mp4" type="video/mp4"/>
           </video>
        </div>
    )
}

export default Bg
