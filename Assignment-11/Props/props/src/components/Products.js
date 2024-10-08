import react from "react";
import Product from "./Product";
import products from "./Data";

const products = () => {

    return (
        <div>
            {products.map((prod) => (
                <Product
                key={prod.id}
                ProductId={prod.userId}
                ProductDate={prod.date}
                ProductProId={prod.name}
                ProductProQuantity={prod.price}


            )
        )
        }
            
        </div>
    )
}