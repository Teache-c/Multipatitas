$(document).ready(function () {
    $("#form").submit(function (e) {
        e.preventDefault();
        var user = $("#user-name").val();
        var correo = $("#email").val();
        var llaves = $("#password").val();
        var msg = "";
        let enviar = false
        /* Validacion: Cantidad de caracteres */
        if (user.trim().length < 4 || user.trim().length > 12) {
            msg += "<p class='text-muted'>" + "El Nickname debe contener entre 4 y 12 caracteres" + "</p>";
            enviar = true;
        }
        /* Validacion: Utilizacion de mayuscula */
        var letra = user.charAt(0);
        if (!isMayus(letra)) {
            msg += "<p class='text-muted'>" + "La primera letra del Nickname debe estar en Mayuscula" + "</p>";
            enviar = true;
        }
        /*  Validacion: Email */
        if (correo.indexOf('@', 0) == -1 || correo.indexOf('.', 0) == -1) {
            msg += "<p class='text-muted'>" + "El correo electrónico introducido no es valido." + "</p>";
            enviar = true;
        }
        /* Validacion: Contraseña */
        if (llaves.trim().length < 6 || llaves.trim().length > 8) {
            msg += "<p class='text-muted'>" + "La contraseña debe contener entre 6 y 8 caracteres" + "</p>";
            enviar = true;
        }

        var letra = llaves.charAt(0);
        if (!isMayus(letra)) {
            msg += "<p class='text-muted'>" + "La primera letra de la contraseña debe estar en Mayuscula" + "</p>";
            enviar = true;
        }
        /* Evaluacion de bandera para enviar el formulario */
        if (enviar) {
            $("#warning").html(msg);
        }
        else {
            $("#warning").html("Ahora estás en nuestros registros °-°...")
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
    $(function () {
        $("#trash-btn1").click(function () {
            $(".prod1").fadeOut();
        });
        $("#trash-btn2").click(function () {
            $(".prod2").fadeOut();
        });
        $("#trash-btn3").click(function () {
            $(".prod3").fadeOut();
        });
        $("#trash-btn4").click(function () {
            $(".prod4").fadeOut();
        });
        $("#trash-btn5").click(function () {
            $(".prod5").fadeOut();
        });
        $("#trash-btn6").click(function () {
            $(".prod6").fadeOut();
        });
        $("#trash-btn7").click(function () {
            $(".prod7").fadeOut();
        });
        $("#trash-btn8").click(function () {
            $(".prod8").fadeOut();
        });
    });
    
    
    $(function () {
    
        $(".text1").mouseenter(function () {
            $("#text1").slideDown();
        });
    
        $(".text1").mouseleave(function () {
            $("#text1").slideUp();
        });
    
        $(".text2").mouseenter(function () {
            $("#text2").slideDown();
        });
    
        $(".text2").mouseleave(function () {
            $("#text2").slideUp();
        });
    
        $(".text3").mouseenter(function () {
            $("#text3").slideDown();
        });
    
        $(".text3").mouseleave(function () {
            $("#text3").slideUp();
        });
    
        $(".text4").mouseenter(function () {
            $("#text4").slideDown();
        });
    
        $(".text4").mouseleave(function () {
            $("#text4").slideUp();
        });
    
        $(".text5").mouseenter(function () {
            $("#text5").slideDown();
        });
    
        $(".text5").mouseleave(function () {
            $("#text5").slideUp();
        });
    
        $(".text6").mouseenter(function () {
            $("#text6").slideDown();
        });
    
        $(".text6").mouseleave(function () {
            $("#text6").slideUp();
        });
    
        $(".text7").mouseenter(function () {
            $("#text7").slideDown();
        });
    
        $(".text7").mouseleave(function () {
            $("#text7").slideUp();
        });
    
        $(".text8").mouseenter(function () {
            $("#text8").slideDown();
        });
    
        $(".text8").mouseleave(function () {
            $("#text8").slideUp();
        });
    
    });
});


