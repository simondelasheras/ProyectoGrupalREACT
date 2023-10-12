'use client'

import { useReducer } from "react";
import { TYPES } from "@/actions";
import { shoppingInitialState, shoppingReducer } from "@/reducer";
import Product from "./Product";
import CartItem from "./CartItem";


const ShoppingCart = () =>{

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)

    const {products, cart} = state;  

    // Manejadores de acciones y eventos.

    const addToCart = (id)=> {dispatch({type: TYPES.ADD_TO_CART , payload: id})}
    
    const deleteFromCart = (id, all=false) => {
        if(all){
            dispatch({type: TYPES.REMOVE_ALL_PRODUCTS, payload: id})
        }else{
            dispatch({type: TYPES.REMOVE_ONE_PRODUCT, payload: id})
        }
    }
    const clearCart = () => {
        dispatch({typer:TYPES.CLEAR_CART})
    }

    return(
        
        <div>
            <h1>Carrito de Compras</h1>
            <h3>Productos</h3>
            <div className="product_div">
                {
                    products.map((product)=> (
                    <Product key={product.id} data={product} addToCart={addToCart} />
                    ))
                }
            </div>

                <h3>Carrito</h3>
                <button onClick={clearCart}>Limpiar Carrito</button>

            <div className="product_div">
                {
                    cart.map((item,index)=>(
                        <CartItem key={index} data={item} deleteFromCart={deleteFromCart}/>
                    ))

                }
            </div>

        </div>


    )
}

export default ShoppingCart;