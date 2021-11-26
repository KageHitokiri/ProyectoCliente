let player = new Player("Your Name Here",15,5);
let enemy = new Enemy("Enemy Name",20,3, 2500, 1, 25, 20);

window.addEventListener('load',()=>{        
    let log = document.getElementById('log');
    let hitButton = document.getElementById('hit__button');
    let hitHardButton = document.getElementById('hit_hard__button');
    let fleeButton = document.getElementById('flee__button');
    let usePotionButton = document.getElementById('use__potion');

    gameStart();
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
        showGameSelector();        
    })

    //Botones de modo
    document.getElementById('newGame').addEventListener('click',()=>{
        clearGameSelector();
        showCharacterCreation();
    })

    document.getElementById('loadGame').addEventListener('click',()=>{
        clearGameSelector();
        showMainUI();
    })    

    //Botones de creación de personaje
    document.getElementById('char__create').addEventListener('click',(e)=>{
        e.preventDefault();
        clearCharacterCreation();
        showMainUI();
    })

    //Botones de ciudad
    document.getElementById('city__shop').addEventListener('click',()=>{
        log.value+="Los comerciantes se niegan a negociar contigo\n";
    })

    document.getElementById('raid').addEventListener('click',()=>{
        clearCityMenu();
        showTravelMenu();
    })

    document.getElementById('city__inn').addEventListener('click',()=>{        
        if (player.getGold()>=10){
            player.addGold(-10)            
            log.value+=
            "El posadero te cobra 10 monedas de oro por descansar.\n"+
            "¡Te recuperas por completo!\n";
            player.fullRestore();
        } else {
            log.value+=`No puedes permitirte este servicio\n`;
        }
    })

    //Botones de viaje    
    document.getElementById('back__to__city').addEventListener('click',()=>{
        clearTravelMenu();
        showCityMenu();
    })

    document.getElementById('find__combat').addEventListener('click',()=>{
        clearTravelMenu();
        showEnemiesMenu();
    })

    document.getElementById('travel__rest').addEventListener('click',()=>{
        log.value+=`Pasas la noche al raso, descansas algo, pero notas que no estás totalmente recuperado`;
        player.restore();
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
    /*
    Actualmente el enemigo no reacciona cuando huyes o cuando utilizas una poción, esto cambiará más adelante, ya que la idea principal es que todos los botones de interacción en combate impliquen una respuesta por parte del enemigo.  
    */      
    fleeButton.addEventListener('click',()=>{
        endCombatUI();            
    })

    usePotionButton.addEventListener('click',()=>{
        player.usePotion();
    });
})