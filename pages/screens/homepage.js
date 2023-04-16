import AppBar from "./appbar";
import CartPage from "./cart_page.js";
import addToCart from "functions/addtocart";
import { useRouter } from "next/router";
import category from "../categories";
import * as fcl from "@onflow/fcl";


const productcard = (img,product) => {
  return (
    <div id="productcard">
      <img className="productpic" src={img}></img>
      <ul id="productcard_list">
        <li id="product_name">{product}</li>
        
      </ul>
      <button id = "list_of_farmer_button">View all sellers</button>
    </div>
  );
};

function categ() {
  const imgData = ["Crops", "Vegees", "Fruits", "Seeds", "Flowers", "Dairy"];

  return (
    <div className="categ-cards-container">
      {imgData.map((product) => {
        return (
          <div key={product} id="categ-individuals">
            <img src={`/${product}.png`} className="category_pic" />
            <h2>{product}</h2>
            
          </div>
        );
      })}
    </div>
  );
}

/*egetables*/
const farmer_product_card_vegetable= (product,img,quantity,date) => {
  return (
    <>
      <div className="farmer_product_card">
        <img className="farmer_product_pic" src={img}></img>
        <ul>
          <li id="product_name_fhome" >{product}</li>
          <li>Quatity:{quantity}</li>
          <li>Added on:{date}</li>
        </ul>
      </div>
    </>
  );
};

//fruits
const farmer_product_card_fruit= (product,img,quantity,date) => {
  return (
    <>
      <div className="farmer_product_card">
        <img className="farmer_product_pic" src={img}/>
        <ul>
          <li id="product_name_fhome" >{product}</li>
          <li>Quatity:{quantity}</li>
          <li>Added on:{date}</li>
        </ul>
      </div>
    </>
  );
};

//fruit
const farmer_product_card_crop= (product,img,quantity,date) => {
  return (
    <>
      <div className="farmer_product_card">
        <img className="farmer_product_pic" src={img}/>
        <ul>
          <li id="product_name_fhome" >{product}</li>
          <li>Quatity:{quantity}</li>
          <li>Added on:{date}</li>
        </ul>
      </div>
    </>
  );
};


const home_page = () => {
  return (
    <div className="home-screen1">
      {AppBar()}
      <div id="home_blankspace"></div>
      <h1 id="categ-heading">CATEGORIES</h1>
      {categ()}

      <div id="veg cat_div">
      <div className="cat_header">
        <h1 className="veg cat_head">VEGETABLES</h1>
        <button id="view_seller">View All Sellers</button>
  
        </div>
      <div id="inventory" className="farmer_product_scroll">
        {farmer_product_card_vegetable("Tomato","/tomato.jpg","5kg","2/3/2003")}
        {farmer_product_card_vegetable("Ladies finger","/ladiesfinger.jpg","2kg","2/3/2003")}
        {farmer_product_card_vegetable("Cucumber","/cucumber.jpg","5kg","2/3/2003")}
        {farmer_product_card_vegetable("Carrot","/carrot.jpg","5kg","2/3/2003")}
        {farmer_product_card_vegetable("Brocoli","/brocoli.jpg","5kg","2/3/2003")}
      </div>
      </div>
      <div id="fruit catdiv">
        <div className="cat_header"> 
        <h1 className="veg cat_head">FRUITS</h1>
        <button id="view_seller">View All Sellers</button>
        </div>
     
      <div id="inventory" className="farmer_product_scroll">
        {farmer_product_card_fruit("watermelon","/watermelon.jpg","5kg","2/3/2003")}
        {farmer_product_card_fruit("Pomogranet","/pomogranet.jpg","2kg","2/3/2003")}
        {farmer_product_card_fruit("Mango","/mango.jpg","5kg","2/3/2003")}
        {farmer_product_card_fruit("Guava","/guava.jpg","5kg","2/3/2003")}
        {farmer_product_card_fruit("Grapes","/grapes.jpg","5kg","2/3/2003")}
      </div>
      </div>
    </div>
  );};

export default home_page;
