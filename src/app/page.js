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
  ];

  return (
    <div className="home-div">
      <h1>Calzado</h1>
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
            <Button /> {}
          </div>
        ))}
      </div>
    </div>
  );
}
