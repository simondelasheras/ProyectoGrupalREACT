'use client'

const Product = ({data, addToCart}) => {

    const {id,name,price,image} = data

    return(

        <div className="product">
            <h4>{name}</h4>
            <h5>USD{price}</h5>
            <img src={image} alt={name} width={'250px'} height={'250px'}/>
            <button className="product_btn" onClick={()=> addToCart(id)}>Agregar</button>
        </div>
    );
};

export default Product;