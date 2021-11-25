let player = new Player("Your Name Here",15,5);
let enemy = new Enemy("Enemy Name",20,3, 2500, 1, 25, 20);

window.addEventListener('load',()=>{        
    let log = document.getElementById('log');
    let hitButton = document.getElementById('hit__button');

    document.getElementById('statistics__name').innerHTML += player.getName();    
    updatePlayerHP();
    updateStamina();
    updateEssence();
    updateGold();
    updateExp();
    updatePotions();
    updateEnemyName();
    updateEnemyHP();
       
    document.getElementById('loginBtn').addEventListener('click',(e)=>{
        e.preventDefault();
        clearLogin();
        showMainUI();        
    })

    document.getElementById('raid').addEventListener('click',()=>{
        clearCityMenu();
        showTravelMenu();
    })

    document.getElementById('find__combat').addEventListener('click',()=>{
        clearTravelMenu();
        showEnemiesMenu();
    })

    document.getElementById('setGoblin').addEventListener('click',()=>{
        enemy.createGoblin();
        startCombatUI();
    })

    document.getElementById('setOrc').addEventListener('click',()=>{
        enemy.createOrc();
        startCombatUI();
    })

    document.getElementById('setOgre').addEventListener('click',()=>{
        enemy.createOgre();
        startCombatUI();
    })
/*
    

    

    

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
        if (player.getHp()<=0){
            alert("Has muerto");
            clearUI();
        } else {
            player.attack(enemy);        
            if(!enemy.getAliveStatus()) {
                endCombatUI();
            } else {
                enemy.attack(player);
            }
        }                
    });
    
    document.getElementById('clearLog').addEventListener('click',()=>{
        clearLog();
    })
    
    document.getElementById('flee__button').addEventListener('click',()=>{
        endCombatUI();            
    })

    document.getElementById('use__potion').addEventListener('click',()=>{
        player.usePotion();
    });
})

