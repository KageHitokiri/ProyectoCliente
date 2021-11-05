class Player {    
    constructor(name, maxHp, damage) {
        this.name = name;
        this.maxHp = maxHp;
        this.hp = maxHp;
        this.damage = damage;
        this.potionCounter = 0;
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
}

class Enemy extends Player {
    constructor(name, maxHp, damage, time) {
        super(name, maxHp, damage);
        this.time = time
    }

}
