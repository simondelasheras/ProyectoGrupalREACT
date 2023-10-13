'use client'

import React, { useState, useEffect } from 'react';
import styles from '@/components/Button-cards/buttonOrange.module.css';

function Button() {
  const [buttonState, setButtonState] = useState({
    active: false,
  });

  useEffect(() => {
    let timeout;

    if (buttonState.active) {
      timeout = setTimeout(() => {
        setButtonState({
          active: false,
        });
      }, 1000); // Ajuste el tiempo de espera aquí
    }

    return () => clearTimeout(timeout);
  }, [buttonState.active]);

  const handleClick = () => {
    setButtonState({
      active: true,
    });
  };

  return (
    <button
      className={`${styles.button} ${buttonState.active ? styles.active : ''}`}
      onClick={handleClick}
    >
      {buttonState.active ? 'Agregado!' : 'Agregar al carrito'}
    </button>
  );
}

export default Button;



