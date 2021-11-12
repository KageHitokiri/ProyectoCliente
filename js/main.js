let player = new Player("Your Name Here",15,5);
let enemy = new Enemy("Enemy Name",20,3, 2500, 1, 25, 20);

window.addEventListener('load',()=>{        
    
    let log = document.getElementById('log');
    enemy.createOgre();
    document.getElementById('statistics__name').innerHTML += player.getName();    
    document.getElementById('statistics__currentHP').innerHTML = `Salud: ${player.getHp()} / ${player.getMaxHp()}`;   
    document.getElementById('statistics__current__Gold').innerHTML += `Oro: ${player.getGold()}`;    
    document.getElementById('statistics__current__XP').innerHTML += `Experiencia: ${player.getExp()}`;
    document.getElementById('statistics__current__Potions').innerHTML += `Total de pociones: ${player.getPotions()}`;
    document.getElementById('enemy__name').innerHTML += enemy.getName();
    document.getElementById('enemy__current__HP').innerHTML = `Salud: ${enemy.getHp()} / ${enemy.getMaxHp()}`;  
    document.getElementById('hit_harder__button').addEventListener('click',()=>{
        player.setPotions(5);
    })
    
    

    document.getElementById('hit__button').addEventListener('click', ()=>{
        player.attack(enemy);
    });

    /*
    setInterval(()=>{
        enemy.attack(player);
    },1000);
 */
    updatePlayerHP();
    document.getElementById('flee__button').addEventListener('click',clearTerminal)
    document.getElementById('use__potion').addEventListener('click',()=>{
        player.usePotion();
    });
})

function clearTerminal(){
    log.value="";
}
