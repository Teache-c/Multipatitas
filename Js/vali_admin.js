$(document).ready(function(){
    $("#formAgre").submit(function (e) {
        e.preventDefault();
        var nomProd = $("#nomProd").val();
        var descProd = $("#desProd").val();
        var valProd = $("#valProd").val();
        var msg ="";
        let enviar = false
        /* validacion cantidad caracteres*/
        if (nomProd.trim().length < 4 || nomProd.trim().length > 20) {
            msg += "<p class='text-muted'>" + "El nombre debe contener entre 4 y 20 caracteres" + "</p>";
            enviar = true;
        }
        /* Validacion: Utilizacion de mayuscula */
        var letra = nomProd.charAt(0);
        if (!isMayus(letra)) {
            msg += "<p class='text-muted'>" + "La primera letra del Nombre Del Producto debe estar en Mayuscula." + "</p>";
            enviar = true;
        }
        /* validacion descripcion*/
        if (descProd.trim().length < 4 || descProd.trim().length > 50) {
            msg += "<p class='text-muted'>" + "El nombre debe contener entre 4 y 50 caracteres." + "</p>";
            enviar = true;
        }
        /*validacion valor producto*/
        if (valProd.trim().length < 1 || valProd.trim().length > 8) {
            msg += "<p class='text-muted'>" + "Excedes el maximo." + "</p>";
            enviar = true;
        }
    });
    $("#cardrr").submit(function(e){
        e.preventDefault();
        var inputValue =$("#inputValue").val();
        var inputStock =$("#inputStock").val();
        var inputDiscount =$("#inputDiscount").val();
    });
    /*validar valor producto*/
    if (valProd.trim().length < 1 || valProd.trim().length > 8) {
        msg += "<p class='text-muted'>" + "Excedes el maximo." + "</p>";
        enviar = true;
    }
    /*validar stock disponible*/
    if (valProd.trim().length < 1 || valProd.trim().length > 3) {
        msg += "<p class='text-muted'>" + "Excedes el maximo." + "</p>";
        enviar = true;
    }
    /* validar descuento aplicado */
    if (valProd.trim().length < 1 || valProd.trim().length > 3) {
        msg += "<p class='text-muted'>" + "Descuento no valido" + "</p>";
        enviar = true;
    }
});

