import React, { useState, useEffect } from "react";


const AboutHome = ({theme}) => {

    const sensitivity = window.innerWidth > 700 ? { x: 200, y: 20 } : { x: 10, y: 10 };

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };



    let x = 0;
    let y = 0;
    let limitedX = 0;
    let limitedY = 0;
    x = (position.x - window.innerWidth / 2) / sensitivity.x;
    y = (position.y - window.innerHeight / 2) / sensitivity.y;
    limitedX = Math.min(Math.max(x, -25), 25);
    limitedY = Math.min(Math.max(y, -25), 25);

    return (
        <section className="about-home">
                <div className="about-text">
                    <h2>¿Qué es Deep Eye?</h2>
                    <p>Somos una plataforma dedicada a la investigación y reflexión sobre la mente humana y los estados no-ordinarios de conciencia.</p> <br />
                    <p>Nuestro objetivo es proporcionar información rigurosa y fomentar el diálogo crítico y reflexivo sobre este tema tan complejo y fascinante.</p>
                    <br />
                    <p>Además, buscamos promover el conocimiento y la información sobre el uso de sustancias psicoactivas, con el fin de reducir los riesgos asociados al uso indebido de estos compuestos e investigar sus usos terapéuticos y de desarrollo humano.</p>
                    <br />
                    <button className="btn-about">QUIERO SABER MÁS!</button>
                </div>


                <div className={theme=== 'dark' ? 'about-img-dark' : 'about-img-light'}>
                    <img src="https://s3.amazonaws.com/skybar.database.teset.1/DeepEye-logo-png.png" alt="Deep-Eye-logo" border="0"/>
                </div>
        </section>
    )
}

export default AboutHome