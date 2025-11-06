// import React, { useEffect, useState, Suspense } from 'react';

// export default function LandingLoader({ componentes }) {
//   const [visibles, setVisibles] = useState(1);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const fullHeight = document.body.scrollHeight;

//       if (scrollTop + windowHeight >= fullHeight - 50 && visibles < componentes.length) {
//         setVisibles((prev) => prev + 1);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [visibles, componentes.length]);

//   return (
//     <div>
//       {componentes.slice(0, visibles).map((Componente, index) => (
//         <Suspense fallback={<div>Cargando componente #{index + 1}...</div>} key={index}>
//             {Componente}
//         </Suspense>
//       ))}
//     </div>
//   );
// }



import React, { useEffect, useState, Suspense, useRef } from 'react';

export default function LandingLoader({ componentes }) {
  const [visibles, setVisibles] = useState(1);
  const containerRef = useRef(null);

  // Chequea si el contenido visible llena la pantalla
  const llenarPantalla = () => {
    if (!containerRef.current) return;
    const alturaContenedor = containerRef.current.offsetHeight;
    const alturaVentana = window.innerHeight;

    // Si el contenido no llena la pantalla, agregamos más
    if (alturaContenedor < alturaVentana && visibles < componentes.length) {
      setVisibles((prev) => prev + 1);
    }
  };

  useEffect(() => {
    llenarPantalla(); // chequeo inicial

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      if (scrollTop + windowHeight >= fullHeight - 50 && visibles < componentes.length) {
        setVisibles((prev) => prev + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibles, componentes.length]);

  useEffect(() => {
    // chequeo cada vez que se actualiza visibles
    llenarPantalla();
  }, [visibles]);

  return (
    <div ref={containerRef}>
      {componentes.slice(0, visibles).map((Componente, i) => (
        <Suspense fallback={<div>Cargando componente #{i + 1}...</div>} key={i}>
          {Componente}
        </Suspense>
      ))}
    </div>
  );
}
