'use strict'


//función para sanitizar inputs
//función para validar login
//función para validar creación de personaje
function logInValidator(e){
    let formName = document.getElementById('form__name');
    let formPassword = document.getElementById('form__password');
    let flag = false;    

    e.preventDefault();

    if (formName.value == "") {
        alert("Debe introducir un nombre de usuario");
        flag = true;
    }

    if (formPassword.value.length<=6){
        alert("Debe introducir una contraseña con más de 6 dígitos");
        flag = true;
    }

    if (!flag) {
        data.setUserName(formName.value);
        data.setPassword(formPassword.value);        
        clearLogin();
        showGameSelector(); 
    }
}

function characterValidation(e){
    let formName = document.getElementById('char__name');
    let formRace = document.getElementById('char__race');
    let formWeapon = document.getElementById('char__weapon');
    let flag = false;

    e.preventDefault();

    if (formName.value == "") {
        alert("Debe introducir un nombre de usuario");
        flag = true;
    }


}