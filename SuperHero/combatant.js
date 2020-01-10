export class Combatant {
    constructor(name, nbrVie, dommage, vitesse) {
        this.name = name;
        this.nbrVie = nbrVie;
        this.dommage = dommage;
        this.vitesse = vitesse;
        

    }
swordAttack(combatant) {
        combatant.nbrVie -= this.dommage;
           
        console.log(combatant.name + " a ete attaquer par " + this.name+ " il a perdu " +this.dommage + " =  "+ combatant.nbrVie);

    }
}

export class Monhero extends Combatant{
    constructor(name,nbrVie,dommage,vitesse,){
        super(name, nbrVie, dommage,vitesse);

        
    }
}