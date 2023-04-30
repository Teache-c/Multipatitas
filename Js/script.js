$(document).ready(function(){
    /*Funcion para obtener productos */
    $(function () {
        //metodo get para el servicio web y una variable data para guardar el JSON
        $.get("https://fakestoreapi.com/products", function (data) {
            //ciclo for para recorrer el JSON y guarda cada elemento de la lista en la variable item
            $.each(data, function (i, item) {
                $("#producto").append(
                    "<div class='dim-carta fon-card'>"+
                        "<a href='../productos/producto.html' class='nav-link'>"+
                            "<img src='" + item.image + "' class='img-fluid borde-img' alt='Sin foto'>" +
                            "<h3 class='px-3 my-3'>" + item.title + "</h6>" +
                            "<p class='px-3 my-3'>" + item.description + "</p>" +
                            "<h3 class='px-3 my-3 text-justify'>$"+ item.price +"</h3>" 
                        +"</a>"
                    +"</div>"
                );
            });
        });
    });
    /* Funcion para obtener un producto */
    $(function () {
        //metodo get para el servicio web y una variable data para guardar el JSON
        $.get("https://fakestoreapi.com/products/1", function (data) {
            //ciclo for para recorrer el JSON y guarda cada elemento de la lista en la variable item
            $.each(data, function (i, item) {
                $("#img-producto").append(
                    "<img src='" + item.image + "' class='img-fluid borde-img' alt='Sin foto'>"
                );
                $("#info-producto").append(
                    ""
                );
            });
        });
    });

});