$(document).ready(function(){

    $(function () {
        //metodo get para el servicio web y una variable data para guardar el JSON
        $.get("https://www.themealdb.com/api/json/v1/1/categories.php", function (data) {
            //ciclo for para recorrer el JSON y guarda cada elemento de la lista en la variable item
            $.each(data.categories, function (i, item) {
                $("#producto").append(
                    "<div class='dim-carta fon-card'>"+
                    "<a href='../productos/producto.html' class='nav-link con-fx'>"+
                    "<img src='" + item.strCategoryThumb + "' class='img-fluid borde-img' alt='Sin foto'>" +
                    "<h6 class='px-3 my-3'>" + item.idCategory + "</h6>" +
                    "<h6 class='px-3 my-3'>" + item.strCategoryDescription + "</h6>" +
                    "<h3 class='px-3 my-3'>" + item.strCategory + "</h3>" 
                    +"</a>"+"</div>"
                );
            });
        });
    });

});