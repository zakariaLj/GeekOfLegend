
class Personne{
    constructor(name,health, money,pocket,disis){
        this.name = name;
        this.health = health;
        this.money = money; 
        this.pocket = pocket;
        this.disis = disis;
    }
    goTo(){

    }
    takeCare(){

    }
    paye(){

    }
}








let marcus = new Personne("marcus", "malade", 100, "vide", "mal-indente");
let optimus = new Personne("optimus", "malade", 200, "vide", "unsave");
let sangoku = new Personne("sangoku", "malade", 80, "vide", "404");
let deathvader = new Personne("deathvader", "malade", 110, "vide", "azmatique");
let semiColon = new Personne("semiColon", "malade", 60, "vide", "synthaxeErreur");
let doctor = new Doctor("doctor");

console.log("------------------- salle d attente ------------------------------");

let salleDattente = new Piece([marcus.name, optimus.name, sangoku.name, deathvader.name, semiColon.name]);
console.log(salleDattente);
console.log("--------------------Entre dans le cabinet--------------------------");

let cabinet = new Piece("cabinet");
doctor.callPatient(marcus);
console.log(cabinet);
