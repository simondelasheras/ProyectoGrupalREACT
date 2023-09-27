import Card from "@/components/Card"

export default function Home() {
  
  const cards = [
    { id: "1", name: "Zapatillas", patent: "Adidas", type: "Running", price: "$ 25.000"},
    { id: "2", name: "Zapatillas", patent: "Nike", type: "Running", price: "$ 24.000"},
    { id: "3", name: "Zapatillas", patent: "Puma", type: "Running", price: "$ 26.000" },
    { id: "4", name: "Zapatillas", patent: "Adidas", type: "Running", price: "$ 25.000"},
    { id: "5", name: "Zapatillas", patent: "Nike", type: "Running", price: "$ 24.000"},
    { id: "6", name: "Zapatillas", patent: "Puma", type: "Running", price: "$ 26.000" },
    { id: "7", name: "Zapatillas", patent: "Adidas", type: "Running", price: "$ 25.000"},
    { id: "8", name: "Zapatillas", patent: "Nike", type: "Running", price: "$ 24.000"},
    { id: "9", name: "Zapatillas", patent: "Puma", type: "Running", price: "$ 26.000" },
  ];
  
  
  return (
    <div className="home-div">
      <h1>Indumentaria</h1>
      <div className="cards-list">

        {
          cards.map(card=>(

            <Card key={card.id} name={card.name} id ={card.id} patent={card.patent} type={card.type} price={card.price}/>

          ))

        }
        
      </div>
    </div>
  )
}
