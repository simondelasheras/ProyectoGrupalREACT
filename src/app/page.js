import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";
import ShoppingCart from "@/components/ShoppingCart";

export default function Home() {
  const cards = [
    {
      id: "1",
      name: "Remera",
      patent: "Topper",
      type: "Entrenamiento",
      price: "$ 7.500",
      imageName: "remera-topper-entrenamiento-mujer.jpg",
      gender: "Women",
      category: "Top",
    },
    {
      id: "2",
      name: "Zapatillas",
      patent: "Adidas",
      type: "Running",
      price: "$ 24.000",
      imageName: "zapatillas-adidas-women-2.png",
      gender: "Women",
      category: "Shoes",
    },
    {
      id: "3",
      name: "Zapatillas",
      patent: "Adidas",
      type: "Urban",
      price: "$ 25.000",
      imageName: "adidas1.jpg",
      gender: "Men",
      category: "Shoes",
    },
    {
      id: "4",
      name: "Calza",
      patent: "Under Armor",
      type: "Entrenamiento",
      price: "$ 6.000",
      imageName: "under-armor-calza.jpg",
      gender: "Women",
      category: "Bottom",
    },
    {
      id: "5",
      name: "Zapatillas",
      patent: "Nike",
      type: "Running",
      price: "$ 24.000",
      imageName: "nike2.jpg",
      gender: "Men",
      category: "Shoes",
    },
    {
      id: "6",
      name: "Zapatillas",
      patent: "Adidas",
      type: "Running",
      price: "$ 26.000",
      imageName: "zapatillas-adidas-women-3.png",
      gender: "Women",
      category: "Shoes",
    },
    {
      id: "7",
      name: "Zapatillas",
      patent: "Adidas",
      type: "Running",
      price: "$ 25.000",
      imageName: "zapatillas-adidas-women-1.png",
      gender: "Women",
      category: "Shoes",
    },
    {
      id: "8",
      name: "Zapatillas",
      patent: "Nike",
      type: "Running",
      price: "$ 24.000",
      imageName: "nike3.jpg",
      gender: "Men",
      category: "Shoes",
    },
    {
      id: "9",
      name: "Camiseta Boca Juniors",
      patent: "Adidas",
      type: "Fútbol",
      price: "$ 50.000",
      imageName: "remera1.jpg",
      gender: "Men",
      category: "Top",
    },
    {
      id: "10",
      name: "Camiseta River Plate",
      patent: "Adidas",
      type: "Fútbol",
      price: "$ 50.000",
      imageName: "remera2.jpg",
      gender: "Men",
      category: "Top",
    },
    // {
    //   id: "11",
    //   name: "Camiseta Argentina",
    //   patent: "Adidas",
    //   type: "Running",
    //   price: "$ 50.000",
    //   imageName: "remera3.jpg",
    //   gender: "Men",
    //   category: "Top",
    // },
    // {
    //   id: "12",
    //   name: "Remera Entrenamiento",
    //   patent: "Under Armour",
    //   type: "Fitness",
    //   price: "$ 50.000",
    //   imageName: "remera4.jpg",
    //   gender: "Men",
    //   category: "Top",
    // },
    {
      id: "13",
      name: "Buzo Argentina",
      patent: "Adidas",
      type: "Fútbol",
      price: "$ 60.000",
      imageName: "buzo1.jpg",
      gender: "Men",
      category: "Top",
    },
    // {
    //   id: "14",
    //   name: "Buzo Camuflado",
    //   patent: "Topper",
    //   type: "Fitness",
    //   price: "$ 60.000",
    //   imageName: "buzo2.jpg",
    //   gender: "Men",
    //   category: "Top",
    // },
    {
      id: "15",
      name: "Buzo Nike",
      patent: "Nike",
      type: "Fitness",
      price: "$ 60.000",
      imageName: "buzo3.jpg",
      gender: "Men",
      category: "Top",
    },
    // {
    //   id: "16",
    //   name: "Buzo Under Armour",
    //   patent: "Under Armour",
    //   type: "Fitness",
    //   price: "$ 60.000",
    //   imageName: "buzo4.jpg",
    //   gender: "Men",
    //   category: "Top",
    // },
    {
      id: "17",
      name: "Short Boca Juniors",
      patent: "Adidas",
      type: "Fútbol",
      price: "$ 40.000",
      imageName: "short1.jpg",
      gender: "Men",
      category: "Bottom",
    },
    {
      id: "18",
      name: "Short River Plate",
      patent: "Adidas",
      type: "Fútbol",
      price: "$ 40.000",
      imageName: "short2.jpg",
      gender: "Men",
      category: "Bottom",
    },
    // {
    //   id: "19",
    //   name: "Short Argentina",
    //   patent: "Adidas",
    //   type: "Fútbol",
    //   price: "$ 40.000",
    //   imageName: "short3.jpg",
    //   gender: "Men",
    //   category: "Bottom",
    // },
    // {
    //   id: "20",
    //   name: "Short Under Armour",
    //   patent: "Under Armour",
    //   type: "Fitness",
    //   price: "$ 40.000",
    //   imageName: "short4.jpg",
    //   gender: "Men",
    //   category: "Bottom",
    // },
    // {
    //   id: "21",
    //   name: "Pantalon Deportivo Boca Juniors",
    //   patent: "Adidas",
    //   type: "Fútbol",
    //   price: "$ 55.000",
    //   imageName: "pantalon1.jpg",
    //   gender: "Men",
    //   category: "Bottom",
    // },
    // {
    //   id: "22",
    //   name: "Pantalon Deportivo Milan AC",
    //   patent: "Puma",
    //   type: "Fútbol",
    //   price: "$ 55.000",
    //   imageName: "pantalon2.jpg",
    //   gender: "Men",
    //   category: "Bottom",
    // },
    {
      id: "23",
      name: "Pantalon Deportivo Argentina",
      patent: "Adidas",
      type: "Fútbol",
      price: "$ 55.000",
      imageName: "pantalon3.jpg",
      gender: "Men",
      category: "Bottom",
    },
    {
      id: "24",
      name: "Pantalon Deportivo Under Armour",
      patent: "Under Armour",
      type: "Fitness",
      price: "$ 55.000",
      imageName: "pantalon4.jpg",
      gender: "Men",
      category: "Bottom",
    },
    {
      id: "25",
      name: "Zapatillas",
      patent: "Puma",
      type: "Running",
      price: "$ 35.000",
      imageName: "puma1.jpg",
      gender: "Men",
      category: "Shoes",
    },
    {
      id: "26",
      name: "Zapatillas",
      patent: "Adidas",
      type: "Running",
      price: "$ 30.000",
      imageName: "adidas4.jpg",
      gender: "Women",
      category: "Shoes",
    },
    {
      id: "27",
      name: "Calza",
      patent: "Puma",
      type: "Entrenamiento",
      price: "$ 8.000",
      imageName: "calza1.jpg",
      gender: "Women",
      category: "Bottom",
    },
    {
      id: "28",
      name: "Short",
      patent: "Under Armour",
      type: "Fitness",
      price: "$ 45.000",
      imageName: "short5.jpg",
      gender: "Women",
      category: "Bottom",
    },
    {
      id: "29",
      name: "Remera",
      patent: "Fila",
      type: "Fitness",
      price: "$ 12.000",
      imageName: "remera5.jpg",
      gender: "Women",
      category: "Top",
    },
    {
      id: "30",
      name: "Buzo",
      patent: "Fila",
      type: "Fitness",
      price: "$ 30.000",
      imageName: "buzo5.jpg",
      gender: "Women",
      category: "Top",
    },
    {
      id: "31",
      name: "Buzo",
      patent: "Under Armour",
      type: "Fitness",
      price: "$ 35.000",
      imageName: "buzo6.jpg",
      gender: "Women",
      category: "Top",
    },
    {
      id: "32",
      name: "Pollera con Calza",
      patent: "Adidas",
      type: "Fitness",
      price: "$ 50.000",
      imageName: "short6.jpg",
      gender: "Women",
      category: "Bottom",
    },
  ];

  const filteredWomenCards = cards.filter((card) => card.gender === "Women");
  const filteredMenCards = cards.filter((card) => card.gender === "Men");

  const renderCategoryCards = (category, cards) => (
    <div>
      <h2>{category}</h2>
      <div className="cards-list">
        {cards
          .filter((card) => card.category === category)
          .map((card) => (
            <div key={card.id} className="card">
              <Card
                name={card.name}
                id={card.id}
                patent={card.patent}
                type={card.type}
                price={card.price}
                imageName={card.imageName}
              />
              <Button />
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <div className="home-div">
      <div className="home-women cards-list-women" id="section-women">
        <h1>WOMEN</h1>
        {renderCategoryCards("Top", filteredWomenCards)}
        {renderCategoryCards("Bottom", filteredWomenCards)}
        {renderCategoryCards("Shoes", filteredWomenCards)}
      </div>
      <div className="home-men cards-list-men" id="section-men">
        <h1>MEN</h1>
        {renderCategoryCards("Top", filteredMenCards)}
        {renderCategoryCards("Bottom", filteredMenCards)}
        {renderCategoryCards("Shoes", filteredMenCards)}
      </div>
      <div>{/* <ShoppingCart /> */}</div>
    </div>
  );
}
