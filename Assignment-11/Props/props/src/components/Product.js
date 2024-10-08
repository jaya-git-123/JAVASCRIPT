import React from 'react';

const Product = (props) => {
    let {ProductId, 
         ProductDate, 
         ProductProId, 
         ProductProQuantity,
      } = props;

  console.log("productid")

  return (
    <div>
      <h2>Product comes here</h2>
    </div>
  )
}

export default Product;