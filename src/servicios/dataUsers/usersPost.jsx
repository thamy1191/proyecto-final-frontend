

const ApiUsers_Api = 'http://localhost:3002/dataUsers'

const usersPost = async () => { // funcion del metodo GET
    try {
        const response = await fetch(ApiUsers_Api, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        });
        const data = await response.json();
        return(data)
        } catch(error) {
        console.log(error)
    } 
}

export default usersPost