'use client'

import React, { useState } from 'react';
import styles from '@/components/Button-cards/buttonOrange.css'; 

function Button() {
  const [buttonState, setButtonState] = useState({color: styles.buttonBlue, text: 'Agregar al carrito'});

   const handleClick = () => {
     setButtonState({color: styles.buttonGreen, text: 'Agregado!'});

     setTimeout(() => {
       setButtonState({color: styles.buttonOrange, text: 'Agregar al carrito'});
     }, 3000);
   };

   return (
     <button className={buttonState.color} onClick={handleClick}>
       {buttonState.text}
     </button>
   );
}

export default Button;