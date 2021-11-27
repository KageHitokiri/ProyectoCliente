'use strict'

class Data {
    constructor(){
        this.userName = "";
        this.password = "";
        this.playerName ="";
        this.playerRace ="";
        this.playerWeapon ="";
    }

    getUserName (){
        return this.userName;
    }
    setUserName(value) {
        this.userName = value
    }

    getPassword (){
        return this.password;
    }
    setPassword(value) {
        this.password = value
    }

    getPlayerName (){
        return this.playerName;
    }
    setPlayerName(value) {
        this.playerName = value
    }

    getPlayerRace (){
        return this.playerRace;
    }
    setPlayerRace(value) {
        this.playerRace = value
    }

    getPlayerWeapon (){
        return this.playerWeapon;
    }
    setPlayerWeapon(value) {
        this.playerWeapon = value
    }

    //función para guardar datos al local storage
    uploadData(){

    }
    //Función para cargar datos del local Storage
    downloadData(){

    }
}