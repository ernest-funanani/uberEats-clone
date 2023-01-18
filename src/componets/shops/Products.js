import React from "react";
import Product from "./Product";

const Products = () => {
  return (
    <div>
      <Product
        id="1"
        title="All Star Box with Buddy Bottle"
        image="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Items/wrapsta_reg.jpg?v=2.29"
        details=" Crunch Burger, 1 piece of Original Recipe chicken, 2 Zinger Wings,
        small chips, 440 ml buddy bottle."
        price={59.99}
      />
    </div>
  );
};

export default Products;
