let player = new Player("Carlos", 15, 5);
let enemy = new Enemy("Kage",20,5,500);


window.addEventListener('load',()=>{
    console.log(player.getDamage());
    //let name = prompt("Introduce un nombre");
    let log = document.getElementById('log');
    document.getElementById('statistics__name').innerHTML += player.getName();    
    document.getElementById('statistics__currentHP').innerHTML = `Salud: ${player.getHp()} / ${player.getMaxHp()}`;    
    document.getElementById('hit__button').addEventListener('click',attack);
    printPlayerHP();
    document.getElementById('flee__button').addEventListener('click',clearTerminal)
    document.getElementById('use__potion').addEventListener('click',usePotion);
})

function clearTerminal(){
    log.value="";
}

function attack() {
    printPlayerHP();
    printDamage(player.getDamage(),"Aarón");
}

function usePotion(){    
    console.log(player.getPotions());
    if (player.getPotions() > 0) {
        player.setPotions(player.getPotions()-1);
        health =10;
        player.setHp(player.getHp()+health) ;
        log.value += `Te sanas ${health} puntos de vida.`        
        if (player.getHp()>=player.getMaxHp()) {
            player.setHp(player.getMaxHp());
            log.value+=" Tu salud está al máximo\n";     
            log.value += `Te quedan un total de ${player.getPotions()} pociones.`               
        } else {
            log.value+="\n";
        }
    } else {
        log.value+="No te quedan pociones\n";
    }
    
    printPlayerHP();
}