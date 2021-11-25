let player = new Player("Your Name Here",15,5);
let enemy = new Enemy("Enemy Name",20,3, 2500, 1, 25, 20);

window.addEventListener('load',()=>{        
    let log = document.getElementById('log');
    let hitButton = document.getElementById('hit__button');
    let hitHardButton = document.getElementById('hit_hard__button');
    let fleeButton = document.getElementById('flee__button');
    let usePotionButton = document.getElementById('use__potion');


    document.getElementById('statistics__name').innerHTML += player.getName();    
    updatePlayerHP();
    updateStamina();
    updateEssence();
    updateGold();
    updateExp();
    updatePotions();
    updateEnemyName();
    updateEnemyHP();

    //Botones de estadisticas del jugador
    document.getElementById('clearLog').addEventListener('click',()=>{
        clearLog();
    })

    //Botones de login       
    document.getElementById('loginBtn').addEventListener('click',(e)=>{
        e.preventDefault();
        clearLogin();
        showMainUI();        
    })
    //Botones de ciudad
    document.getElementById('raid').addEventListener('click',()=>{
        clearCityMenu();
        showTravelMenu();
    })
    //Botones de viaje
    document.getElementById('find__combat').addEventListener('click',()=>{
        clearTravelMenu();
        showEnemiesMenu();
    })
    
    //Botones de creación de enemigos
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

    //Botones de combate
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

    hitHardButton.addEventListener('click',()=>{
        if (player.getHp()<=0){
            alert("Has muerto");
            clearUI();
        } else {
            player.strongAttack(enemy);
            if(!enemy.getAliveStatus()) {
                endCombatUI();
            } else {
                enemy.attack(player);
            }
        } 
    })
        
    fleeButton.addEventListener('click',()=>{
        endCombatUI();            
    })

    usePotionButton.addEventListener('click',()=>{
        player.usePotion();
    });
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
    
    
})

