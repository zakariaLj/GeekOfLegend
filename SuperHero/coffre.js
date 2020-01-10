export class Coffre{
    constructor(name, cadeauVie, cadeauDommage,cadeauVitesse){
        this.name = name;
        this.cadeauVie = cadeauVie;
        this.cadeauDommage = cadeauDommage;
        this.cadeauVitesse = cadeauVitesse;
    }

getCoffre(combatant){
    combatant.nbrVie += this.cadeauVie;
    combatant.dommage += this.cadeauDommage;
    combatant.vitesse += this.cadeauVitesse;
}
openCoffre(combatant){

}
}