import React from 'react';

const ProductsBody = ({item}) =>(
    <div className="product-container">
        <h2>{item.Name}</h2>
        <img src={item.ProductImage}/>
        <p>{item.Price}</p>
        <p>{item.Description}</p>
       
    </div>
    
)

export default ProductsBody;
