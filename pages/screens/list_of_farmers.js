const farmer_card = (name,place,latest) =>{
    return(
    <>
    <div className="farmer_navbar_blankspace"></div>
    <div className = "list_farmer_card">
      <img className = "list_farmer_profile_pic" src = "profile.png"></img>
      <ul>
        <li>{name}</li>
        <li>Place : {place}</li>
        <li>Last delivery on : {latest} ago</li>
      </ul>
      <div id = "list_farmer_review">
        <div>
        <img id = "list_farmer_star" src = "star.png"></img>
        <img id = "list_farmer_star" src = "star.png"></img>
        <img id = "list_farmer_star" src = "star.png"></img>
        <img id = "list_farmer_star" src = "star.png"></img>
        </div>
      </div>
    </div>
    </>);
    
}

const list_of_farmer_page = () =>{
    return(
        <>
         {farmer_card("Rajan","Thoraipakkam","5hrs")}
        {farmer_card("Anbu","chennai","1hrs")}
        {farmer_card("chandra","Ennore","3hrs")}
        {farmer_card("senthil","chetpet","1hrs")}
        {farmer_card("Guna","Parris","5hrs")}
        {farmer_card("Velu","Perambur","3hrs")}
        {farmer_card("Palani","Thooraipakkam","2hrs")}
       
      
        </>
    );

}

export default list_of_farmer_page;

