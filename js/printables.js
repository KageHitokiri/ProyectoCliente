function updatePlayerHP(){
    document.getElementById('statistics__currentHP').innerHTML = `Salud: ${player.getHp()} / ${player.getMaxHp()}`;
}

function updateEnemyHP(){
    document.getElementById('enemy__current__HP').innerHTML = `Salud: ${enemy.getHp()} / ${enemy.getMaxHp()}`;
}

function printDamage(damage, target) {    
    log.value+=`${target} ha recibido ${damage} puntos de daño.\n`;
}

function updatePotions(){
    document.getElementById('statistics__current__Potions').innerHTML = `Total de pociones: ${player.getPotions()}`;
}
function updateGold(){
    document.getElementById('statistics__current__Gold').innerHTML = `Oro: ${player.getGold()}`;    
}
function updateExp(){
    document.getElementById('statistics__current__XP').innerHTML = `Experiencia: ${player.getExp()}`;
}

function updatePlayerData(){
    updatePlayerHP();
    updateGold();
    updateExp();
    updatePotions();
}