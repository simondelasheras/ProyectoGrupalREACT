'use client'

import Image from "next/image"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Carrusel from "@/components/Carrusel"
import Tarjetas from "@/components/Tarjetas"


export default function Home () {
  return (
    <div>
    <div><Tarjetas/></div>
    <div><Carrusel/></div>
    </div>
    
  )
}
