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
            <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <div>
                <br>
                <h5>Calificación</h5>
              </div>
              <div>
                <label for="inputCode" id="labelnom" class="form-label.lab">Nombre:</label>
                <input type="text" class="form-cart" id="inputCode" aria-describedby="CodeHelp"
                  placeholder="Escribe tu nombre">
              </div>
              <div>
                <form>
                  <p class="clasificacion my-3">
                    <input id="radio1" type="radio" name="estrellas" value="5">
                    <label for="radio1">★</label>
                    <input id="radio2" type="radio" name="estrellas" value="4">
                    <label for="radio2">★</label>
                    <input id="radio3" type="radio" name="estrellas" value="3">
                    <label for="radio3">★</label>
                    <input id="radio4" type="radio" name="estrellas" value="2">
                    <label for="radio4">★</label>
                    <input id="radio5" type="radio" name="estrellas" value="1">
                    <label for="radio5">★</label>
                  </p>
                </form>
              </div>
            </div>
            <!-- Añadir comentarios -->
            <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 my-4">
              <div>
                <h5>Comentarios</h5>
              </div>
              <textarea class="estilotextarea" name="" id="" cols="30" rows="10"
                placeholder="Cuéntanos tu experiencia en Multipatitas"></textarea>
            </div>

            <!-- Botón enviar -->
            <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 mt-5 ">
              <div class="centy2">
                <button type="button" class="btn btn-outline-dark my-3">Enviar</button>
              </div>
            </div>
          </div>
        </div>

  `
  modal.show()
}





