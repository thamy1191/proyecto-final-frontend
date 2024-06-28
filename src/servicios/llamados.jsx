const AddPost = async (usuario, contrasena) => { // funcion del metodo POST
    try {
        const response = await fetch('http://localhost:3002/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify({
                usuario : usuario, 
                contrasena: contrasena
            })
        });
        const data = await response.json();
        return data
        } catch(error) {
        console.log(error)
    } 
}

export default AddPost 