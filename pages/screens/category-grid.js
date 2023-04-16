function prodcard(){
  const product=[
    {
        name:"wheat",
        image:"/wheat.jpg"
    },
    {
      name:"Seeds",
      image:"/Seeds.png"
    }
    
]
}

return (
  <div key={product}>
    {product.map((product)=>{
      return (
        <div>
          <img src={product.image}/>
        </div>
      )
    })}

  </div>
)

export default prodcard