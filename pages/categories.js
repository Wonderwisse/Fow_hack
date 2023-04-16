function category(){
    const imgData=["cropsb","flowersb","honeyb", "milkb","nutsb","vegetables"]
    return(
      <div>
      {imgData.map((path)=>{
        return (
          <div key={path}>
            <img src={`/${path}.png`}/>
          </div>
        );
      })}
    </div>
    )
  }

  export default category