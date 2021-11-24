'use strict'



window.addEventListener('load',()=>{
    clearUI();
    showLogin();
})

function clearLogin() {
    document.getElementById('login').style.display="none";    
}

function showLogin() {
    document.getElementById('login').style.display="block";    
}

function clearCharacterCreation(){
    document.getElementById('form__characterCreation').style.display="none";    
}

function showCharacterCreation(){
    document.getElementById('form__characterCreation').style.display="block";        
}

function clearPlayerSatistics (){
    document.getElementById('player__statics').style.display="none";    
}

function showPlayerSatistics(){
    document.getElementById('player__statics').style.display="block";    
}

function clearCombatMenu(){
    document.getElementById('combat__menu').style.display="none";    
}

function showCombatMenu(){
    document.getElementById('combat__menu').style.display="block";    
}

function clearTerminal(){
    document.getElementById('terminal__id').style.display="none";    
}

function showTerminal(){
    document.getElementById('terminal__id').style.display="block";    
}

function showMainUI(){
    showPlayerSatistics();
    showTerminal();
}

function clearUI(){
    clearLogin();
    clearCharacterCreation();
    clearPlayerSatistics();
    clearCombatMenu();
    clearTerminal();
}