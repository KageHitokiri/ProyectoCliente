class Player {   

    constructor(name, maxHp, damage) {
        this.name = name;
        this.maxHp = maxHp;
        this.hp = maxHp;
        this.damage = damage;
        this.potionCounter = 1;
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
    setPotions(value){
        this.potionCounter = value;
    }
    test(){
        console.log(this.damage);
        printDamage(this.damage,"Aarón");
    }

    attack() {
        console.log(this.damage);
        player.hp -= player.damage;
        printPlayerHP();

        printDamage(this.damage,"Tu enemigo");
        console.log(player.hp);
    }
    
    usePotion(){    
        let health =10;
        console.log(this.potionCounter);
        if (this.potionCounter > 0) {
            this.potionCounter--;
            
            player.hp += health;            
            log.value += `Te sanas ${health} puntos de vida.`        
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
    constructor(name, maxHp, damage, time) {
        super(name, maxHp, damage);
        this.time = time
    }

}
