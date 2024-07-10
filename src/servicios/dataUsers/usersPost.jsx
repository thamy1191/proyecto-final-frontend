const usersPost = async (usuario, contrasena) => { 
    try {
        const response = await fetch('http://localhost:3002/dataUsers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify({
              usuario: usuario ,
              contrasena :contrasena ,
            })
        });
        const data = await response.json();
        return data
        } catch(error) {
        console.log(error)
    } 
}
export default usersPost

