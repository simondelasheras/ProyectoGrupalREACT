'use client'
import React, { useState } from 'react';

function Button() {

  const [buttonState, setButtonState] = useState({color: 'blue', text: 'Agregar al carrito'});

   const handleClick = () => {
     setButtonState({color: 'green', text: 'Agregado!'});

     setTimeout(() => {
       setButtonState({color: 'blue', text: 'Agregar al carrito'});
     }, 3000);
   };

   return (
     <button style={{ backgroundColor: buttonState.color }} onClick={handleClick}>
       {buttonState.text}
     </button>
   );
}

export default Button