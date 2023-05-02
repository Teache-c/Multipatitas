document.addEventListener('DOMContentLoaded', getProduts)
const products = document.querySelector('#products')
const cartItems = document.querySelector('#cartItems')
async function getProduts() {
  const url = 'https://fakestoreapi.com/products'
  try {
    const resultado = await fetch(url)
    const respuesta = await resultado.json()
    printProducts(respuesta)
  } catch (error) {
    console.log(error)
  }
}
function printProducts(productos) {
  productos.forEach(prod => {
    const { id, title, price, description, image } = prod;
    products.innerHTML +=
      `<div class="dim-carta fon-card">
          <img src="${image}" class="img-fluid img-cat-pro borde-img" alt="Sin foto">
          <h3 class="px-3 my-3 text-justify">${title}</h6> 
          <p class="px-3 my-3 text-justify">${description.length > 50 ? description.substring(0, 50).concat('... más') : description}</p>
          <h3 class="px-3 my-3 text-justify">$ ${price}</h3> 
          <div class="centy mx-4">
          <button onclick=showProducts(${id}) href="../productos/producto.html" class="btn btn-outline-dark centy">Ver productos</button>
          </div>
      </div>`;
  });
} 

async function showProducts(id) {
  console.log(id)
}




