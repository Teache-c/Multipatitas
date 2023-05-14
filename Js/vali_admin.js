$(document).ready(function(){
    $("#formAgreProd").submit(function(e) {
        e.preventDefault();
        var nomProd = $("#nomProd").val();
        var descProd = $("#desProd").val();
        var valProd = $("#valProd").val();

        var msj ="";
        let enviar = false;

        /* validacion cantidad caracteres*/
        if (nomProd.trim().length < 4 || nomProd.trim().length > 20) {
            msj += "<p class='text-muted'>" + "El nombre debe contener entre 4 y 20 caracteres" + "</p>";
            enviar = true;
        }
        /* Validacion: Utilizacion de mayuscula */
        var letra = nomProd.charAt(0);
        if (!isMayus(letra)) {
            msj += "<p class='text-muted'>" + "La primera letra del Nombre Del Producto debe estar en Mayuscula." + "</p>";
            enviar = true;
        }
        /* validacion descripcion*/
        if (descProd.trim().length < 4 || descProd.trim().length > 50) {
            msj += "<p class='text-muted'>" + "La descripción debe contener entre 4 y 50 caracteres." + "</p>";
            enviar = true;
        }
        /*validacion valor producto*/
        if (valProd.trim().length < 1 || valProd.trim().length > 8) {
            msj += "<p class='text-muted'>" + "Ingresa un valor valido" + "</p>";
            enviar = true;
        }

        /* Evaluacion de bandera para enviar el formulario */
        if (enviar) {
            $("#warning").html(msj);
        }
        else {
            $("#warning").html("Producto Agregado");
        }

    });

    function isMayus(letra) {
        console.log("letra inicial:", letra);
        console.log("Nombre Valido");
        console.log("La letra en mayuscula:", letra.toUpperCase());
        if (letra == letra.toUpperCase()) {
            return true;
        }
        else {
            return false;
        }
    };

    $("#cardModProd").submit(function(e){
        e.preventDefault();
        var inputValue =$("#inputValue").val();
        var inputStock =$("#inputStock").val();
        var inputDiscount =$("#inputDiscount").val();

        var msj ="";
        let enviar = false;

        /*validar valor producto*/
        if (valProd.trim().length < 1 || valProd.trim().length > 8) {
            msj += "<p class='text-muted'>" + "Excedes el maximo." + "</p>";
            enviar = true;
        }
        /*validar stock disponible*/
        if (valProd.trim().length < 1 || valProd.trim().length > 3) {
            msj += "<p class='text-muted'>" + "Excedes el maximo." + "</p>";
            enviar = true;
        }
        /* validar descuento aplicado */
        if (valProd.trim().length < 1 || valProd.trim().length > 3) {
            msj += "<p class='text-muted'>" + "Descuento no valido" + "</p>";
            enviar = true;
        }
        if (enviar) {
            $("#warning").html(msj);
        }
        else {
            $("#warning").html("Producto Modificado");
        }
    });
    
});

