$(document).ready(function(){
    $("#form").submit(function(e){
        e.preventDefault();
        var user = $("#user-name").val();
        var correo = $("#email").val();
        var llaves = $("#password").val();

        var msg = "";
        let enviar = false

        if(user.trim().length < 4 || user.trim().length > 12 ){
            msg += "El nombre debe contener entre 4 y 12 caracteres";
            enviar = true;
        }

        var letra = user.charAt(0);
        if (!isMayus(letra)){
            msg += "<br>La primera letra del Nombre De Usuario debe estar en Mayusculas";
            enviar = true;
        }
        /* Validacion de existencia del nombre de usuario */
        /* if(!user == userPhp){
            msj += "<br>El Nombre de Usuario es valido";
            enviar = true;
        }
        else{
            msj += "Lo lamentamos :[ ese nombre de usuario ya existe en nuestros registros...";
        }  */

        if(enviar){
            $("#warning").html(msg);
        }
        else{
            $("#warning").html("Ahora estás en nuestros registros °-°")
        }
    });

    function isMayus(letra){
        console.log("letra inicial:",letra);
        console.log("Nombre Valido");
        console.log("La letra en mayuscula:", letra.toUpperCase());
        if(letra == letra.toUpperCase()){
            return true;
        }
        else{
            return false;
        }
    }; 
});
