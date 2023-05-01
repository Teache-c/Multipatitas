document.addEventListener('DOMContentLoaded', getProduts)
const products = document.querySelector('#products')
    async function getProduts() {
        const url = 'https://fakestoreapi.com/products'
        try{
            const resultado = await fetch(url)
            const respuesta = await resultado.json()
            printProducts(respuesta)
        }catch(error){
            console.log(error)
        }
    }
    function printProducts(productos){
        productos.forEach(prod => {
            const{id,title, price, description, image} = prod;
            products.innerHTML += 
            `<div class="dim-carta fon-card">
                <a href="../productos/producto.html" data-productId="${id}" class="nav-link">
                    <img src="${image}" class="img-fluid borde-img" alt="Sin foto">
                    <h3 class="px-3 my-3">${title}</h6> 
                    <p class="px-3 my-3">${description.length > 50 ? description.substring(0, 50).concat('... más'): description}</p>
                    <h3 class="px-3 my-3 text-justify">$ ${price}</h3> 
                </a>
            </div>`;
        });
    }
    




