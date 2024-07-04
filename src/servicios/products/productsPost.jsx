const productsPOST = async (nombre, precio, descripcion, url) => { 
    try {
        const response = await fetch('http://localhost:3002/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify({
               nombre : nombre,
               precio : precio,
               descripcion : descripcion,
               url : url
            })
        });
        const data = await response.json();
        return data
        } catch(error) {
        console.log(error)
    } 
}
export default productsPOST