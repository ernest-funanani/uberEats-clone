import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../layouts/Header";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./Product.css";
import Products from "./Products";
import ShoppingContext from "../context/shopping/shoppingContext";
import { listProduct } from "../../actions/productsAction";

const Product = (id, img, title, details, price) => {
  //adding product details

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);
  //addng product to cart
  const shoppingContext = useContext(ShoppingContext);
  const { addToCart } = shoppingContext;
  const addToCartHandler = () => {
    addToCart({ item: { id, img, title, details, price } });
  };

  return (
    <div>
      <Header />
      <div className="product-det">
        <div className="product-left">
          <div className="prod-left-top">
            <ArrowBackIcon />
            <h4>Back to KFC, Maredale</h4>
          </div>
          <div>
            {loading ? (
              <h2>loading</h2>
            ) : error ? (
              <h3>{error}:</h3>
            ) : (
              <div>
                {products.map((product) => (
                  <Products className="food-img-det" src={product.img} />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="product-right">
          {products.map((product) => (
            <Products title={product.title} />
          ))}
          <p className="product_price">
            <small>R</small>
            {products.map((product) => (
              <Products title={product.price} />
            ))}
          </p>
          {products.map((product) => (
            <Products title={product.details} />
          ))}
          <div className="flavoured">
            <h4>Drink Flavour</h4>
            <p>Required</p>
          </div>
          <div>
            <div>
              <p>Coke zero</p>
              <input type="radio" />
            </div>
            <p>R 13.00</p>
          </div>
          <div className="flavoured">
            <h6>Drink Flavour</h6>
            <p>Required</p>
          </div>
          <button className="product_button" onClick={addToCartHandler}>
            Add 1 to orderꞏR87.90
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
