const nombreField = document.querySelector("[name=nombre]");
const usuarioField = document.querySelector("[name=usuario]");
const emailField = document.querySelector("[name=email]");
const passwordField = document.querySelector("[name=password]");


/*blur evento cuando el cursor sale del campo, que no esté vacio*/

const validateEmptyField = (message, e) => {
    const field = e.target;
    const fieldValue= e.target.value;
    if (fieldValue.trim().length === 0) {
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = message;
    } else {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
}

/*Valida que el mail tenga al menos tres caracteres seguidos de @ y un punto caracteres */
const validateEmailFormat = e => {
    const field = e.target;
    const fieldValue = e.target.value;
    const emailRegex = (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i);
    if (fieldValue.trim().length > 3 && !emailRegex.test(fieldValue)) {
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Por Favor Ingrese un email válido";
    } else {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
}

/*al menos una letra, al menos un numero, al menos una letra mayúscula, al menos 8 caracteres, no permite espacios.*/ 
const validatePasswordFormat = e => {
    const field = e.target;
    const fieldValue = e.target.value;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
    if (fieldValue.trim().length > 0 && !passwordRegex.test(fieldValue)) {
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Por Favor Ingrese una Contraseña Válida";
    } else {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
}

/*Una o mas palabras separadas con por lo menos un espacio
Cada palabra debe cumplir las siguientes reglas:
Los caracteres permitidos mas de una vez en cada palabra son [A-Za-zÑñÁáÉéÍíÓóÚú] (Letras mayusculas y minúsculas, incluidos las vocales con tilde y las Ñ)
Los únicos símbolos permitidos son el apóstrofo y el guión ['\-] y estos se permiten a lo sumo una vez {0,1}
Asumiendo que cada palabra debe empezar y terminar con una letra la expresion lleva el cuantificador + . En caso de permitirse empezar y/o terminar con los símbolos permitidos los cuantificadores deberían cambiarse por * (cero o más) */
const validateNomApFormat = e => {
    const field = e.target;
    const fieldValue = e.target.value;
    const nombreRegex = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
    if (fieldValue.trim().length > 3 && !nombreRegex.test(fieldValue)) {
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Por Favor Ingrese un Nombre Válido";
    } else {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
}


nombreField.addEventListener("blur", (e) => validateEmptyField("Debe ingresar su Nombre y Apellido", e));
usuarioField.addEventListener("blur", (e) => validateEmptyField("Debe ingresar un Nombre de Usuario", e));
emailField.addEventListener("blur", (e) => validateEmptyField("Debe ingresar su Correo", e));
passwordField.addEventListener("blur", (e) => validateEmptyField("Debe ingresar una Contraseña", e));

emailField.addEventListener("input", validateEmailFormat);
passwordField.addEventListener("input", validatePasswordFormat);
nombreField.addEventListener("input", validateNomApFormat);
