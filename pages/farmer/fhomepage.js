import AppBar from "../screens/appbar";
import CartPage from "../screens/cart_page.js";
import addToCart from "functions/addtocart";
import { useRouter } from "next/router";
import category from "../categories";
import * as fcl from "@onflow/fcl";


/*
const createInventory = async () => {
  const transactionId = await fcl.mutate({
    cadence: `
      import AgroLink from 0x85ab176b258a1b22

      transaction{
          prepare(acct: AuthAccount){
          
              acct.save(<- AgroLink.createInventory(), to: /storage/Inventory)
         
              acct.link<&AgroLink.Inventory>(/public/InventoryPublic, target: /storage/Inventory)
          }
      
          execute{
              log("Inventory Created!")
          }
      }
      `,
    payer: fcl.authz,
    proposer: fcl.authz,
    authorizations: [fcl.authz],
    limit: 50,
  });

  const transaction = await fcl.tx(transactionId).onceSealed();
  console.log(transaction);
};

const addInventory = async () => {
  const transactionId = await fcl.mutate({
    cadence: `
      import AgroLink from 0x85ab176b258a1b22

    transaction(name: String, nos: Int, price: UFix64){
        prepare(acct: AuthAccount){
        
            let inventoryRef = acct.borrow<&AgroLink.Inventory>(from: /storage/Inventory)
                            ?? panic("No Items found!")
        
        inventoryRef.addItem(item: <- AgroLink.addItems(name: name, nos: nos, price: price))    
    }

    execute{
        log("Item Added!")
    }
    }`,
    args: (arg, t) => [arg("Apple", 34, 0.1)],
    payer: fcl.authz,
    proposer: fcl.authz,
    authorizations: [fcl.authz],
    limit: 50,
  });

  const transaction = await fcl.tx(transactionId).onceSealed();
  console.log(transaction);
};

const getInventory = async () => {
  const transactionId = await fcl.query({
    cadence: `
      import AgroLink from 0x85ab176b258a1b22

transaction{
    prepare(acct: AuthAccount){
        let myitem = acct.borrow<&AgroLink.Inventory>(from: /storage/Inventory)
                    ??panic("Could not borrow item!")

        log(myitem.items.keys)
    }

    execute{
        log("Checked for item!")
    }
}`,
    args: (arg, t) => [arg("Apple", 34, 0.1)],
    payer: fcl.authz,
    proposer: fcl.authz,
    authorizations: [fcl.authz],
    limit: 50,
  });

  const transaction = await fcl.tx(transactionId).onceSealed();
  console.log(transaction);
}

*/
const productcard = (img,product,quantity,date) => {
  return (
    <div id="productcard">
      <img className="productpic" src={img}></img>
      <ul id="productcard_list">
        <li id="product_name">{product}</li>
        <li id="product_quantity">{quantity}</li>
        <li id="date_of_delivery">Delivery on {date}</li>
        <button>Add to cart</button>
      </ul>
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
            <a href="#inventory">
              <img src={`/${product}.png`} className="category_pic" />
            </a>
            <h2>{product}</h2>
          </div>
        );
      })}
    </div>
  );
}


//vegetables
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
      <h1 id="categ-heading">INVENTORY</h1>
      {categ()}

      <div id="veg cat_div">
      <div className="cat_header">
        <h1 className="veg cat_head">VEGETABLES</h1>
        <button id="add_button">ADD</button>
        <button id="remove_button">REMOVE</button>
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
        <button id="add_button">ADD</button>
        <button id="remove_button">REMOVE</button>
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
  );
};

export default home_page;
