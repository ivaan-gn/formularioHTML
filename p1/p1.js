function validate(){
var login = document.getElementById("login").value;
var password = document.getElementById("password").value;
var dni = document.getElementById("dni").value;

var regex_login = /^[a-z0-9]+$/; //Todos los caracteres deben ser letras minusculas o numeros
var regex_password_mayus = /[A-Z]/; //Una letra mayuscula
var regex_password_minus = /[a-z]/; //Una letra minuscula
var regex_password_num = /[0-9]/; //Un numero
var regex_password_accent = /[ÁÉÍÓÚáéíóú]/; //Vocales con acentos
var regex_password_simb = /[+--*/]/; //Un caracter especial de los mencionados
var regex_dni = /^[0-7]\d{7}[A-Z]$/; //Un numero de 0 a 7, seguido de 7 numeros y finalizando con una letra mayuscula

//Comprobaciones

//Comprobaciones del login
if(login.length != 0){
    if(login.length > 8 || login.length < 4){
        alert("El nombre de usuario debe estar compuesto por entre 4 y 8 caracteres"); return false;
    }
    if(!login.match(regex_login)){
        alert("El nombre de usuario no puede estar compuesto por letras mayúsculas"); return false;
    }
}

//Comprobaciones password
if(password.length != 0){
    if(password.length > 12 || password.length < 6){
        alert("La contraseña debe estar compuesta por entre 6 y 12 caracteres"); return false;
    }
    if(!password.match(regex_password_mayus)){
        alert("La contraseña debe incluir al menos una letra mayúscula"); return false;
    }
    if(!password.match(regex_password_minus)){
        alert("La contraseña debe incluir al menos una letra minúscula"); return false;
    }
    if(!password.match(regex_password_num)){
        alert("La contraseña debe incluir al menos un número"); return false;
    }
    if(!password.match(regex_password_simb)){
        alert("La contraseña debe incluir al menos un símbolo del conjunto “+-*/”"); return false;
    }
    if(password.match(regex_password_accent)){
        alert("La contraseña no puede estar compuesta por acentos"); return false;
    }
}

//Comprobaciones dni
if((dni.length != 0) && (dni.match(regex_dni) == null)){
    alert ("El DNI debe contener 8 dígitos, comenzando por un número entre 0 y 7 y una letra mayúscula"); return false;
}

//Fin comprobaciones


//Informacion del navegador
document.getElementById("info-browser").setAttribute("value", navigator.userAgent);

//Informacion de la fecha y hora
document.getElementById("info-date").setAttribute("value", (new Date).toString());


//Verificamos que no se hayan seleccionado GET y multipart a la vez, en ese caso enviamos con GET y con application/x-www-form-urlencoded
if (document.getElementById("get-method").checked){
    document.getElementById("form").setAttribute("method","GET");
    document.getElementById("form").setAttribute("enctype","application/x-www-form-urlencoded");
}

} //Fin funcion validate()


//Funcion para seleccionar todas en el checkbox
function selectAll(){
    
    var genres = document.getElementsByName("cgenre[]");

    //Desmarco la opcion "Desmarcar todas" si esta seleccionada
    var deselect_box = document.getElementById("deselect-box");
    if(deselect_box.checked == true)
    deselect_box.checked = false;

    for(var i=0; i<genres.length;i++)
    genres[i].checked = true;
}

//Funcion para deseleccionar todas en el checkbox
function deselectAll(){
    
    var genres = document.getElementsByName("cgenre[]");

    //Desmarco la opcion "Marcar todas" si esta seleccionada
    var select_box = document.getElementById("select-box");
    if(select_box.checked == true)
    select_box.checked = false;

    for(var i=0; i<genres.length;i++)
    genres[i].checked = false;
}


//Funcion para enviar con el metodo POST
function postMethod(){
    document.getElementById("form").setAttribute("method","POST");
}

//Funcion para enviar con el metodo GET
function getMethod(){
    document.getElementById("form").setAttribute("method","GET");
}


//Función para enviar con el tipo de codificacion application/x-www-form-urlencoded
function appEncoding(){
    document.getElementById("form").setAttribute("enctype","application/x-www-form-urlencoded");
}

//Función para enviar con el tipo de codificacion multipart/form-data
function multEncoding(){
    document.getElementById("form").setAttribute("enctype","multipart/form-data");
}