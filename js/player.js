class Player {   

    constructor(name, maxHp, damage) {
        this.name = name;
        this.maxHp = maxHp;
        this.hp = maxHp;
        this.damage = damage;
        this.exp = 25;
        this.gold = 10;
        this.potionCounter = 1;
        this.isAliveStatus = true;
    }

    getName() {
        return this.name;
    }
    getMaxHp(){
        return this.maxHp;
    }
    
    getHp(){
        return this.hp;
    }
    setHp(value){
        this.hp = value;
    }

    getDamage(){
        return this.damage;
    }
    setDamage(value){
        this.damage = value;
    }

    getPotions(){
        return this.potionCounter;
    }
    setPotions(potions){
        console.log(potions);
        console.log(this.potionCounter);
        this.potionCounter = potions;
    }
    addPotions(value){
        parseInt(this.potionCounter += value);
    }

    getGold(){
        return this.gold;
    }
    setGold(gold) {
        this.gold = gold;
    }
    addGold(value) {
        this.gold +=value;
    }

    getExp() {
        return this.exp;
    }
    setExp(exp){
        this.exp = exp;
    }
    addExp(value) {
        this.exp += value;
    }


    attack(target) { 
        let hpLose = target.getHp(); 

        hpLose -= this.damage;  
        target.setHp(hpLose);
        updatePlayerHP();
        updateEnemyHP();
        printDamage(this.damage,target.getName());  

        if (target.getHp()<=0) {
            target.isAliveStatus = false;
            log.value+=`${target.getName()} ha caido.\n`;
            if (typeof(target==Enemy)) {
                target.lootMessage();
                target.lootEnemy(this);
            }
        } 
    }

    usePotion(){    
        let health =10;
        console.log(this.potionCounter);
        if (this.potionCounter > 0) {
            this.potionCounter--;
            
            player.hp += health;            
            log.value += `Te sanas ${health} puntos de vida.`;
            updatePotions();        
            if (player.hp > player.maxHp) {
                player.hp = player.maxHp;
                log.value+=" Tu salud está al máximo\n";     
                log.value += `Te quedan un total de ${this.potionCounter} pociones.`               
            } else {
                log.value+="\n";
            }
        } else {
            log.value+="No te quedan pociones\n";
        }
        printPlayerHP();
    }


}

class Enemy extends Player {
    constructor(name, maxHp, damage, time, potions, exp, gold) {
        super(name, maxHp, damage);
        this.time = time
        this.potionCounter = potions;
        this.exp = exp
        this.gold = gold;
    }
    
    lootMessage() {
        let lootMessage = `Obtienes: \n`;
        if (this.potionCounter===0) {                        
        } else if (this.potionCounter===1) {
            lootMessage += "\t-1 poción";
        } else {
            lootMessage += `\t-${this.potionCounter} pociones`;
        }

        lootMessage += `\n\t-${this.exp} puntos de experiencia\n`;
        log.value+=lootMessage;        
    }

    lootEnemy(player){
        
        player.addExp(this.exp);
        player.addGold(this.gold);
        player.addPotions(this.potionCounter);
        updatePlayerData();
    }
}
