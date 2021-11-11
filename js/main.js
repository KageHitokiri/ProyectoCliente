let player = new Player("Your Name Here",15,5);

window.addEventListener('load',()=>{    

    console.log(player.getDamage());
    
    //let name = prompt("Introduce un nombre");
    let log = document.getElementById('log');
    document.getElementById('statistics__name').innerHTML += player.getName();    
    document.getElementById('statistics__currentHP').innerHTML = `Salud: ${player.getHp()} / ${player.getMaxHp()}`;    
    document.getElementById('hit__button').addEventListener('click',()=>{
        player.attack();
    });
    printPlayerHP();
    document.getElementById('flee__button').addEventListener('click',clearTerminal)
    document.getElementById('use__potion').addEventListener('click',()=>{
        player.usePotion();
    });
})

function clearTerminal(){
    log.value="";
}
