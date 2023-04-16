import { useState } from "react";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };


  addToCart(product)

  return (
    <div>
      <h1>Cart Page</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                {product.name} - {product.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};



export default CartPage;
