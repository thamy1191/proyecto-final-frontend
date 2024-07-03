
import DarkVariantExample from "./carrusel"
// import '../styles/homewelcome.css'
import p from '../assets/img/p.jpg'



function homewelcome() {
  return (
    <div>
     
      
      <img src={p} className="p"/>

       <h1>los mas vistos</h1>

      <DarkVariantExample/>
    </div>
  )
}

export default homewelcome


