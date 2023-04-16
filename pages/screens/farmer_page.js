const farmer_product_card = () =>{
  return(
  <>
  <div className = "ffarmer_product_card">
    <img className = "ffarmer_product_pic" src = "profile.png"></img>
    <ul>
      <li>Wheat</li>
      <div>
      <img id = "star" src = "star.png"></img>
      <img id = "star" src = "star.png"></img>
      <img id = "star" src = "star.png"></img>
      <img id = "star" src = "star.png"></img>
      </div>
      
    </ul>
  </div>
  
  </>
  )
}

const farmer_page = () =>{

  return(
  <>
  <div className="ffarmer_navbar_blankspace"></div>
  <h3>Farmer Details</h3>
  <div className = "ffarmer_card">
    <img className = "ffarmer_profile_pic" src = "profile.png"></img>
    <ul>
      <li>Name : Allan</li>
      <li>Horticulturist</li>
      <li>Location: Perambur, Chennai</li>
    </ul>
    <div id = "ffarmer_review">
      User Review
      <div>
      <img id = "farmer_star" src = "star.png"></img>
      <img id = "farmer_star" src = "star.png"></img>
      <img id = "farmer_star" src = "star.png"></img>
      <img id = "farmer_star" src = "star.png"></img>
      </div>
    </div>
  </div>
  <h3>Products</h3>
  <div className="ffarmer_product_scroll">
  {farmer_product_card()}
  {farmer_product_card()}
  {farmer_product_card()}
  {farmer_product_card()}
  {farmer_product_card()}
  {farmer_product_card()}
  {farmer_product_card()}
  {farmer_product_card()}

  </div>

  </>
  
  
  )
}

export default farmer_page;