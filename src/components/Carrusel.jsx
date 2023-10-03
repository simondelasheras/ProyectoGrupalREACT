import { useEffect } from 'react';
import Image from 'next/image';
import gimnasio from '../../public/images/gimnasio.jpg';
import gimnasio2 from '../../public/images/gimnasio2.jpg';
import gimnasio3 from '../../public/images/gimnasio3.jpg';

import { Carousel } from 'bootstrap';

function Carrusel() {
  useEffect(() => {
   
    const carouselElement = document.getElementById('carouselExampleFade');

   const myCarousel = new Carousel(carouselElement, {
      interval: 2000,
      // Otras opciones si las necesitas
    });

  return () => {
      myCarousel.dispose();
    };
  }, []);

  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image src={gimnasio} className="d-block w-100" alt="Gimnasio" height={500} width={300} />
        </div>
        <div className="carousel-item">
          <Image src={gimnasio2} className="d-block w-100" alt="Gimnasio 2" height={500} width={300} />
        </div>
        <div className="carousel-item">
          <Image src={gimnasio3} className="d-block w-100" alt="Gimnasio 3" height={500} width={300} />
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

export default Carrusel;