let player = new Player("Your Name Here",15,5);
let enemy = new Enemy("Enemy Name",20,3, 2500, 1, 25, 20);

window.addEventListener('load',()=>{        
    let log = document.getElementById('log');
    let hitButton = document.getElementById('hit__button');
    
    enemy.createGoblin();
    console.log(player.getAliveStatus());
    console.log(enemy.getAliveStatus());
    
    document.getElementById('statistics__name').innerHTML += player.getName();    
    updatePlayerHP();
    updateStamina();
    updateEssence();
    updateGold();
    updateExp();
    updatePotions();
    document.getElementById('enemy__name').innerHTML += enemy.getName();
    document.getElementById('enemy__current__HP').innerHTML = `Salud: ${enemy.getHp()} / ${enemy.getMaxHp()}`;  
   /*    
    document.getElementById('loginBtn').addEventListener('click',()=>{
        showGameSelector();
        
    })
 
    statistics__stamina
    statistics__essence
    document.getElementById('loginBtn').addEventListener('click',()=>{
        
    })

    document.getElementById('loginBtn').addEventListener('click',()=>{
        
    })

    document.getElementById('loginBtn').addEventListener('click',()=>{
        
    })

    document.getElementById('loginBtn').addEventListener('click',()=>{
        
    })

    document.getElementById('loginBtn').addEventListener('click',()=>{
        
    })

    document.getElementById('loginBtn').addEventListener('click',()=>{
        
    })

    document.getElementById('loginBtn').addEventListener('click',()=>{
        
    })

    document.getElementById('loginBtn').addEventListener('click',()=>{
        
    })

    document.getElementById('loginBtn').addEventListener('click',()=>{
        
    })
*/
    
    hitButton.addEventListener('click', ()=>{
        player.attack(enemy);
        console.log(enemy.getAliveStatus());
        if(!enemy.getAliveStatus()) {
            endCombatUI();
        } 
    });

    updatePlayerHP();
    document.getElementById('flee__button').addEventListener('click',clearTerminal)
    document.getElementById('use__potion').addEventListener('click',()=>{
        player.usePotion();
    });
})

