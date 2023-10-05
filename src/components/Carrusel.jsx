import { useEffect } from 'react';
import Image from 'next/image';
import Bienvenida from "@/components/Bienvenida"
import Tarjetas from "@/components/Tarjetas"
import Cursos from "@/components/Cursos"
import Bienvenida1 from "../../public/images/Bienvenida1.jpg"
import Targets2 from "../../public/images/Targets2.jpg"
import Cursos1 from "../../public/images/Cursos1.jpg"

import { Carousel } from 'bootstrap';

function Carrusel() {
  useEffect(() => {
    const carouselElement = document.getElementById('carouselExampleFade');

    const myCarousel = new Carousel(carouselElement, {
      interval: 2000,
    });

    return () => {
      myCarousel.dispose();
    };
  }, []);

  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image src={Bienvenida1} className="d-block w-100" alt="Gimnasio" height={500} width={300}></Image>
          <div className="carousel-caption d-none d-md-block"><Bienvenida/></div>
        </div>
        <div className="carousel-item">
          <Image src={Targets2} className="d-block w-100" alt="Gimnasio 2" height={500} width={300}></Image>
          <div className="carousel-caption d-none d-md-block"><Tarjetas/></div>
        </div>
        <div className="carousel-item">
          <Image src={Cursos1} className="d-block w-100" alt="Gimnasio 3" height={500} width={300}></Image>
          <div className="carousel-caption d-none d-md-block"><Cursos/></div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carrusel