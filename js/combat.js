'use strict'

function startCombat(player, enemy) {
    let round = 0;
    console.log("Combat starts");
    console.log
    log.value+=`Empieza el combate contra ${enemy.getName()}`;
    console.log("Player: "+player.getAliveStatus())
    console.log("Enemy: "+ enemy.getAliveStatus())    
        
    
        
    if (!player.getAliveStatus() || !enemy.getAliveStatus()){
        log.value+=`Fin del combate`;
    }
    
   
}