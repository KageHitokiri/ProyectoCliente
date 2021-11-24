let player = new Player("Your Name Here",15,5);
let enemy = new Enemy("Enemy Name",20,3, 2500, 1, 25, 20);

window.addEventListener('load',()=>{        
    let log = document.getElementById('log');
    let hitButton = document.getElementById('hit__button');
    
    enemy.createGoblin();
    console.log(player.getAliveStatus());
    console.log(enemy.getAliveStatus());
    enemy.createOgre();
    document.getElementById('statistics__name').innerHTML += player.getName();    
    document.getElementById('statistics__currentHP').innerHTML = `Salud: ${player.getHp()} / ${player.getMaxHp()}`;   
    document.getElementById('statistics__current__Gold').innerHTML += `Oro: ${player.getGold()}`;    
    document.getElementById('statistics__current__XP').innerHTML += `Experiencia: ${player.getExp()}`;
    document.getElementById('statistics__current__Potions').innerHTML += `Total de pociones: ${player.getPotions()}`;
    document.getElementById('enemy__name').innerHTML += enemy.getName();
    document.getElementById('enemy__current__HP').innerHTML = `Salud: ${enemy.getHp()} / ${enemy.getMaxHp()}`;  
    
    document.getElementById('loginBtn').addEventListener('click',(e)=>{
        e.preventDefault();
        clearLogin();
        showCharacterCreation();
    });

    document.getElementById('char__create').addEventListener('click',(e)=>{
        e.preventDefault();
        clearCharacterCreation();
        showMainUI();
        
    })

    hitButton.addEventListener('click', ()=>{
        
        player.attack(enemy);
        console.log(enemy.getAliveStatus());
        if(!enemy.getAliveStatus()) {
            hitButton.setAttribute('disabled','');
        } else {
            hitButton.removeAttribute('disabled','');
        }
    });

    updatePlayerHP();
    document.getElementById('flee__button').addEventListener('click',cleanTerminal)
    document.getElementById('use__potion').addEventListener('click',()=>{
        player.usePotion();
    });
})

function cleanTerminal(){
    log.value="";
}
