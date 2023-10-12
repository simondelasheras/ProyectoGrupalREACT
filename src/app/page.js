import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function Home() {
  const cards = [
    {
      id: "1",
      name: "Zapatillas",
      patent: "Adidas",
      type: "Running",
      price: "$ 25.000",
      imageName: "adidas1.jpg",
    },
    {
      id: "2",
      name: "Zapatillas",
      patent: "Nike",
      type: "Running",
      price: "$ 24.000",
      imageName: "nike1.jpg",
    },
    {
      id: "3",
      name: "Zapatillas",
      patent: "Puma",
      type: "Running",
      price: "$ 26.000",
      imageName: "puma1.jpg",
    },
    {
      id: "4",
      name: "Zapatillas",
      patent: "Adidas",
      type: "Running",
      price: "$ 25.000",
      imageName: "adidas2.jpg",
    },
    {
      id: "5",
      name: "Zapatillas",
      patent: "Nike",
      type: "Running",
      price: "$ 24.000",
      imageName: "nike2.jpg",
    },
    {
      id: "6",
      name: "Zapatillas",
      patent: "Puma",
      type: "Running",
      price: "$ 26.000",
      imageName: "puma2.jpg",
    },
    {
      id: "7",
      name: "Zapatillas",
      patent: "Adidas",
      type: "Running",
      price: "$ 25.000",
      imageName: "adidas3.jpg",
    },
    {
      id: "8",
      name: "Zapatillas",
      patent: "Nike",
      type: "Running",
      price: "$ 24.000",
      imageName: "nike3.jpg",
    },
    {
      id: "9",
      name: "Camiseta Boca Juniors",
      patent: "Adidas",
      type: "Fútbol",
      price: "$ 50.000",
      imageName: "remera1.jpg",
    },
    {
      id: "10",
      name: "Camiseta River Plate",
      patent: "Adidas",
      type: "Fútbol",
      price: "$ 50.000",
      imageName: "remera2.jpg",
    },
    {
      id: "11",
      name: "Camiseta Argentina",
      patent: "Adidas",
      type: "Running",
      price: "$ 50.000",
      imageName: "remera3.jpg",
    },
    {
      id: "12",
      name: "Remera Entrenamiento",
      patent: "Under Armour",
      type: "Fitness",
      price: "$ 50.000",
      imageName: "remera4.jpg",
    },
    {
      id: "13",
      name: "Buzo Argentina",
      patent: "Adidas",
      type: "Fútbol",
      price: "$ 60.000",
      imageName: "buzo1.jpg",
    },
    {
      id: "14",
      name: "Buzo Camuflado",
      patent: "Topper",
      type: "Fitness",
      price: "$ 60.000",
      imageName: "buzo2.jpg",
    },
    {
      id: "15",
      name: "Buzo Nike",
      patent: "Nike",
      type: "Fitness",
      price: "$ 60.000",
      imageName: "buzo3.jpg",
    },
    {
      id: "16",
      name: "Buzo Under Armour",
      patent: "Under Armour",
      type: "Fitness",
      price: "$ 60.000",
      imageName: "buzo4.jpg",
    },
    {
      id: "17",
      name: "Short Boca Juniors",
      patent: "Adidas",
      type: "Fútbol",
      price: "$ 40.000",
      imageName: "short1.jpg",
    },
    {
      id: "18",
      name: "Short River Plate",
      patent: "Adidas",
      type: "Fútbol",
      price: "$ 40.000",
      imageName: "short2.jpg",
    },
    {
      id: "19",
      name: "Short Argentina",
      patent: "Adidas",
      type: "Fútbol",
      price: "$ 40.000",
      imageName: "short3.jpg",
    },
    {
      id: "20",
      name: "Short Under Armour",
      patent: "Under Armour",
      type: "Fitness",
      price: "$ 40.000",
      imageName: "short4.jpg",
    },
    {
      id: "21",
      name: "Pantalon Deportivo Boca Juniors",
      patent: "Adidas",
      type: "Fútbol",
      price: "$ 55.000",
      imageName: "pantalon1.jpg",
    },
    {
      id: "22",
      name: "Pantalon Deportivo Milan AC",
      patent: "Puma",
      type: "Fútbol",
      price: "$ 55.000",
      imageName: "pantalon2.jpg",
    },
    {
      id: "23",
      name: "Pantalon Deportivo Argentina",
      patent: "Adidas",
      type: "Fútbol",
      price: "$ 55.000",
      imageName: "pantalon3.jpg",
    },
    {
      id: "24",
      name: "Pantalon Deportivo Under Armour",
      patent: "Under Armour",
      type: "Fitness",
      price: "$ 55.000",
      imageName: "pantalon4.jpg",
    },
  ];

return (
  <div className="home-div">
    <h1>Men</h1>
    <div className="cards-list">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <Card
            name={card.name}
            id={card.id}
            patent={card.patent}
            type={card.type}
            price={card.price}
            imageName={card.imageName}
          />
          <Button /> {/* Agrega el botón de compra aquí */}
        </div>
      ))}
    </div>
  </div>
);
}
