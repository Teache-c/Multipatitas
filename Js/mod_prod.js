document.addEventListener('DOMContentLoaded', getProduts)
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
    const { title, price, image } = prod;
    cartItems.innerHTML +=
  });
}