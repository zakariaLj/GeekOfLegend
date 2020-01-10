export class Combatant {
    constructor(name, nbrVie, dommage, vitesse,participant) {
        this.name = name;
        this.nbrVie = nbrVie;
        this.dommage = dommage;
        this.vitesse = vitesse;
        this.participant = []

    }
    swordAttack(participan) {
        participan.nbrVie -= this.dommage;
        console.log(this.name + " a ete attaquer par " + participan.name+ " il a perdu " +this.dommage + " =  "+ participan.nbrVie);

    }

}


export class Monhero extends Combatant{
    constructor(name,nbrVie,dommage,vitesse){
        super(name, nbrVie, dommage,vitesse);

        this.name = name;
        this.nbrVie = nbrVie;
        this.dommage = dommage;
        this.vitesse = vitesse;
 

        
    }
    // swordAttack(participan) {
    //     participan.nbrVie -= this.dommage;
    //     console.log(this.name + " a ete attaquer par " + participan.name+ " il a perdu " +this.dommage + " =  "+ participan.nbrVie);

    // }
}

