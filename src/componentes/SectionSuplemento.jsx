
//import { useState } from "react";
import { UsarElContexto } from "../Context/getProductsContext"
//import axios from "axios";


function SectonSuplemento() {


  const {API, api} = UsarElContexto();

  //let [api, setApi] = useState()

  //  axios.get('http://localhost:3002/products')
  //  .then(response => {
  //    //setApi(response.data)
  //    console.log(response.data)
      
  //   console.log(API);
  //  })

  console.log(api);
  console.log(API);


  return (
    <div>
      
      {API.map((product , i) => {
        return(
        <div key={i}>
          <div >
            <div >{product.nombre}</div>
          </div>
        </div>
        )
        
      })}
    </div>
  )
}

export default SectonSuplemento
