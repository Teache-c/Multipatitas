$(document).ready(function () {
  /* Validaciones para formulario de registro de usuario */
  $("#formSignUp").submit(function (e) {
    e.preventDefault();
    var user = $("#user-name").val();
    var correo = $("#email").val();
    var llaves = $("#password").val();
    var special = new RegExp("^(?=.*[!@#$&*])");
    var repeatPass = $("#repeatPassword").val();
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
      msg += "<p class='text-muted'>" + "Debe ingresar un correo electrónico valido." + "</p>";
      enviar = true;
    }
    /* Validacion: Contraseña */
    if (llaves.trim().length < 6 || llaves.trim().length > 12) {
      msg += "<p class='text-muted'>" + "La contraseña debe contener entre 6 y 8 caracteres" + "</p>";
      enviar = true;
    }
    /* Validacion: Caracter Especial */
    if (!special.test(llaves)) {
      msg += "<p class='text-muted'>" + "La contraseña debe contar con al menos un caracter especial y puedes usar !@#$&*" + "</p>";
      enviar = true
    }
    var letra = llaves.charAt(0);
    if (!isMayus(letra)) {
      msg += "<p class='text-muted'>" + "La primera letra de la contraseña debe estar en Mayuscula" + "</p>";
      enviar = true;
    }
    /* Validacion: Repetir Contraseña */
    if (llaves != repeatPass) {
      msg += "<p class='text-muted'>" + "La contraseñas deben coincidir" + "</p>";
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
  
  /* Validaciones para formulario de modificar cuenta */
  $("#formModCuenta").submit(function (e) {
    e.preventDefault();
    var user = $("#user-name").val();
    var mail = $("#email").val(); 
    var adress = $("#adress").val();
    var phoneReg = new RegExp("^(?=.*[+])"); 
    var phoneNum = $("#number").val();
    var bDate = $("#date").val();
    var msg = "";
    let enviar = false;
    /* Validacion: Cantidad de caracteres(NickName) */
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
    if (mail.indexOf('@', 0) == -1 || mail. indexOf('.', 0) == -1) {
      msg += "<p class='text-muted'>" + "Debe ingresar un correo electrónico valido." + "</p>";
      enviar = true;
    }
    /* Validacion: Datos De Direccion */
    if (adress.trim().length < 1) {
      msg += "<p class='text-muted'>" + "Su dirección no puede quedar vacia" + "</p>";
      enviar = true;
    }
    if(!phoneReg.test(phoneNum) || phoneNum.trim().length != 12 || phoneNum.indexOf('+569', 0) == -1){
      msg += "<p class='text-muted'>" + "Debe ingresar un número valido,debe tener el indicador +569 seguido de 8 digitos" + "</p>";
      enviar = true;
    }
    if (enviar) {
      $("#warning").html(msg);
    }
    else {
      $("#warning").html("Haz modifiacado tu perfil con éxito :D")
    }
  });

  /* Validacion de correo en recuperar */
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

  /* Validacion de password en recuperar */
  $("#formPassword").submit(function (e) {
    e.preventDefault();
    var llaves = $("#password").val();
    var special = new RegExp("^(?=.*[!@#$&*])");
    var repeatPass = $("#repeatPassword").val();
    var msg = "";
    let enviar = false

    if (llaves.trim().length < 6 || llaves.trim().length > 12) {
      msg += "<p class='text-muted'>" + "La contraseña debe contener entre 6 y 8 caracteres" + "</p>";
      enviar = true;
    }
    /* Validacion: Caracter Especial */
    if (!special.test(llaves)) {
      msg += "<p class='text-muted'>" + "La contraseña debe contar con al menos un caracter especial y puedes usar !@#$&*" + "</p>";
      enviar = true
    }
    var letra = llaves.charAt(0);
    if (!isMayus(letra)) {
      msg += "<p class='text-muted'>" + "La primera letra de la contraseña debe estar en Mayuscula" + "</p>";
      enviar = true;
    }
    /* Validacion: Repetir Contraseña */
    if (llaves != repeatPass) {
      msg += "<p class='text-muted'>" + "La contraseñas deben coincidir" + "</p>";
      enviar = true;
    }
    /* Evaluacion de bandera para enviar el formulario */
    if (enviar) {
      $("#warning").html(msg);
    }
    else {
      $("#warning").html("Contraseña modificada")
    }
  });


  /* Validacion Mayuscula */
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
  
});




