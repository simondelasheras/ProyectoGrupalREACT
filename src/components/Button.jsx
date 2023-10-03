'use client'
import React from 'react';

function Button() {
  return (
    <div>
        
    <button className="btn-container" onClick={()=> alert ('Agregado al carrito!')}>Agregar al carrito</button>

    </div>
  )
}

export default Button