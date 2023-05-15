$(document).ready(function () {
    $("#formCorreo").submit(function (e) {
        e.preventDefault();
        var correo = $("#email").val();
        var msg = "";
        let enviar = false
        /* validacion: Email*/
        if (correo.indexOf('@', 0) == -1 || correo.indexOf('.', 0) == -1) {
            msg += "<p class='text-muted'>" + "Debe ingresar un correo electrónico valido." + "</p>";
            enviar = true;
        }
        /* Evaluacion de bandera para enviar el formulario */
        if (enviar) {
            $("#warning").html(msg);
        }
        else {
            $("#warning").html("Revisa tu bandeja de entrada de email <3...")
        }
    });
});