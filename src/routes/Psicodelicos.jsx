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
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f110c028-627b-4e5a-a0fc-54fd9ed17ca4/dc7uw9n-135a4c5d-11da-47c4-8eae-d29111d07fbe.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YxMTBjMDI4LTYyN2ItNGU1YS1hMGZjLTU0ZmQ5ZWQxN2NhNFwvZGM3dXc5bi0xMzVhNGM1ZC0xMWRhLTQ3YzQtOGVhZS1kMjkxMTFkMDdmYmUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.D8OclNqPcN5QxWCDqwBVdytAhX6nh4RGSgU_q6Gq14Q" alt=""  />
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