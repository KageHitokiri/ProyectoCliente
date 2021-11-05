function printPlayerHP(){
    document.getElementById('statistics__currentHP').innerHTML = `Salud: ${player.getHp()} / ${player.getMaxHp()}`;
}

function printDamage(damage, target) {    
    console.log(`${target} ha recibido ${damage} puntos de daño`);    
    log.value+=`${target} ha recibido ${damage} puntos de daño\n`;
}