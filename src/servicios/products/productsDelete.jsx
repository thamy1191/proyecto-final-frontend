const products_API = 'http://localhost:3002/products'


export async function DELETE(id) {
    const response = await fetch(products_API + id, {
        method: 'DELETE',
    });
    if (response.ok) {
        console.log('Borrado');
    }
}