import { useInView } from 'react-intersection-observer';
import React, { useState, useEffect } from 'react';

import 'animate.css';

const About = () => {
  const [ref1, inView1] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });


  const sensitivity = window.innerWidth > 1000 ? { x: 300, y: 100 } : { x: 50000, y: 50000 };

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
    <div className="about-container">
      <div className={`about a1 ${inView1 ? 'animate__animated animate__fadeInLeft' : ''}`} ref={ref1} >

        <h2 style={{ transform: `translate(${-limitedX}%, ${-limitedY}%)`, transition: "transform 0.1s ease-out"}}>Somos una plataforma dedicada a la investigación y reflexión sobre la mente humana y los estados alterados de conciencia. <br /> Nos esforzamos por comprender cómo estos estados han estado involucrados en la evolución del cerebro humano, analizando datos de las experiencias brindadas por nuestros usuarios.</h2>

        <div className="image-about" style={{transform: `translate(${-limitedX}%, ${-limitedY}%)`,transition:"transform 0.1s ease-out"}}>

          <img src="https://s3.amazonaws.com/skybar.database.teset.1/neurons.gif" alt="" />
          
        </div>
      </div>

      <div className={`about a2 ${inView2 ? 'animate__animated animate__fadeInRight' : ''}`} ref={ref2}>
        <div className="image-about">
          <img style={{ transform: `translate(${limitedX}%, ${-limitedY}%)`, transition: "transform 0.1s ease-out"}} src="https://s3.amazonaws.com/skybar.database.teset.1/homero.gif" alt="" />
        </div>
        <h2 style={{ transform: `translate(${limitedX}%, ${-limitedY}%)`, transition: "transform 0.1s ease-out"}}>Como parte de nuestro compromiso con la rigurosidad, promovemos el conocimiento relacionado al consumo de sustancias psicoactivas, abogando por reducir los riesgos asociados al uso indebido de estos compuestos, mientras investigamos sus posibles usos terapéuticos y de desarrollo humano.</h2> 
      </div>

      <div className={`about a3 ${inView3 ? 'animate__animated animate__fadeInLeft' : ''}`} ref={ref3}>
        <h2 style={{ transform: `translate(${-limitedX}%, ${limitedY}%)`, transition: "transform 0.1s ease-out"}}>Estamos enfocados en proporcionar información precisa y confiable sobre estos temas, a través de investigaciones rigurosas y una comunicación transparente y responsable. Preocupandonos profundamente por la salud y el bienestar de nuestros usuarios y  comprometidos en hacer nuestra contribución al avance de la comprensión de la mente humana de manera ética, legal y sin tabúes.</h2>
        <div style={{ transform: `translate(${-limitedX}%, ${limitedY}%)`, transition: "transform 0.1s ease-out"}} className="image-about">
          <img src="https://marketpedia.ca/wp-content/uploads/2021/10/gif-01-brent-rambo-b25.gif" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
