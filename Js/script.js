document.addEventListener('DOMContentLoaded', getProduts);
const products = document.querySelector('#products');
const modal = new bootstrap.Modal('#miModal', {});

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
          <button onclick=showProducts(${id}) class="btn btn-outline-dark centy">Ver productos</button>
          </div>
      </div>`;
  });
} 

async function showProducts(id) {
  const url = `https://fakestoreapi.com/products/${id}`

  try {
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      showProduct(resultado);
  } catch (error){
    console.log(error)
  }
}
function showProduct(resultado){
  const { title, price, description, image } = resultado;
  const modalBody = document.querySelector('.modal .modal-body')

  modalBody.innerHTML = 
  `
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 pd-col ">
        <img src="${image}" class=" img-fluid shadow-img" alt="image">
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
        <div class="tam-txt-con tam-con">
          <h3 class="text-justify">${title}</h3>
          <p class="text-justify">DESCRIPCION DEL PRODUCTO: ${description}</p>
          <h3 class="text-justify my-5">$ ${price}</h3>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
          <div class="row my-3 glass">
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div class="my-3 centy">
                <h5>Calificación</h5>
              </div>
              <div class="centy">
                <input type="text" class="form-cart"aria-describedby="CodeHelp"
                  placeholder="Escribe tu nombre">
              </div>
              <div>
                <form class="center-coment id="puntuacion"">
                  <p class="clasificacion my-4">
                    <input class="input_stars" id="radio1" type="radio" name="estrellas" value="5">
                    <label class="stars" for="radio1">★</label>
                    <input class="input_stars" id="radio2" type="radio" name="estrellas" value="4">
                    <label class="stars" for="radio2">★</label>
                    <input class="input_stars" id="radio3" type="radio" name="estrellas" value="3">
                    <label class="stars" for="radio3">★</label>
                    <input class="input_stars" id="radio4" type="radio" name="estrellas" value="2">
                    <label class="stars" for="radio4">★</label>
                    <input class="input_stars" id="radio5" type="radio" name="estrellas" value="1">
                    <label class="stars" for="radio5">★</label>
                  </p>
                </form>
              </div>
            </div>
            <!-- Añadir comentarios -->
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 my-4">
              <div>
                <h5>Comentarios</h5>
              </div>
              <textarea class="estilotextarea" cols="30" rows="10"
                placeholder="Cuéntanos tu experiencia en Multipatitas"></textarea>
                <div class="centy">
                <button type="button" class="btn btn-outline-dark aply-btn ">Aplicar</button>
            </div>
          </div>
        </div>

  `
  modal.show()
}





