function updatePlayerHP(){
    document.getElementById('statistics__currentHP').innerHTML = `Salud: ${player.getHp()} / ${player.getMaxHp()}`;
}

function updateEnemyName(){
    document.getElementById('enemy__name').innerHTML = `Nombre: ${enemy.getName()}`;
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
    document.getElementById('statistics__current__Gold').innerHTML = `Oro: <span class="goldColor">${player.getGold()}</span>`;    
}
function updateExp(){
    document.getElementById('statistics__current__XP').innerHTML = `Experiencia: ${player.getExp()}`;
}

function updateStamina(){
    document.getElementById('statistics__stamina').innerHTML = `Resistencia: ${player.getStamina()} / ${player.getMaxStamina()}`;
}

function updateEssence(){
    document.getElementById('statistics__essence').innerHTML = `Esencia: ${player.getEssence()} / ${player.getMaxEssence()}`;
}

function clearLog(){
    log.value="";
}

function updatePlayerData(){
    updatePlayerHP();
    updateStamina();
    updateEssence();
    updateGold();
    updateExp();
    updatePotions();
}

function updateEnemyData(){
    updateEnemyName();
    updateEnemyHP();
}