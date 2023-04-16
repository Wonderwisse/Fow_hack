import { useState } from "react";


  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const products = [
    {
      id: 1,
      name: "Wheat",
      price: 10,
      image: "/wheat.jpg",
    },
    {
      id: 2,
      name: "Corn",
      price: 20,
      image: "/corn.jpg",
    },
    {
      id: 3,
      name: "Soybean",
      price: 30,
      image: "/soybean.jpg",
    },
  ];

export default addToCart;
