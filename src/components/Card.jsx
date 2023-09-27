import Button from "./Button"

function Card({id, name, patent, type, price}) {

  return (
    <div className="card-container">
      <h2>{name}</h2>
      <p>ID:{id}</p>
      <p>Marca: {patent}</p>
      <p>{type}</p>
      <p>{price}</p>
      <Button/>
    </div>
  )
}

export default Card