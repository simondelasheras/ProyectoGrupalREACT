'use client'

const CartItem = ({data, deleteFromCart}) =>{

    const {id, name, price, quantity} = data;

    return(
        <div>
            <h4>{name}</h4>
            <h5> USD{price} * {quantity} = USD{price * quantity}</h5>
            <button onClick={()=> deleteFromCart(id)}>Eliminar Uno</button>
            <button onClick={()=> deleteFromCart(id,true)}></button>
        </div>
    )
}

export default CartItem;