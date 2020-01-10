import { Personne } from './personne.js';
import { Piece } from './Piece.js';
import { Doctor } from './doctor.js';


let marcus = new Personne("marcus", "malade", 100, "vide", "mal-indente");
let optimus = new Personne("optimus", "malade", 200, "vide", "unsave");
let sangoku = new Personne("sangoku", "malade", 80, "vide", "404");
let deathvader = new Personne("deathvader", "malade", 110, "vide", "azmatique");
let semiColon = new Personne("semiColon", "malade", 60, "vide", "syntaxError");
let doctor = new Doctor("doctor");
// let salleDattente = [marcus, optimus, sangoku, deathvader, semiColon];
let personnage = new Personne(marcus, optimus, sangoku, deathvader, semiColon);
// let argent = new Personne()





console.log("------------------- salle d attente ------------------------------");
console.log(marcus.name , optimus.name, sangoku.name,deathvader.name, semiColon.name);

// for (let i = 0; i < salleDattente.length; i++) {

//     let choixPatient = prompt()
//     doctor.callPatient(salleDattente[i]);
//     doctor.diagnostique(salleDattente[i]);
//     personnage.paye(salleDattente[i]);
//     doctor.bringOut(salleDattente[i]);


// }

let choixPatient = prompt(`Choissisez votre patient:
1. monsieur Marcus.
2. monsieur Optimus.
3. monsieur Sangoku.
4. monsieur DeathVader.
5. monsieur semiColon`).toLowerCase()

switch (choixPatient) {
    case "marcus":
        doctor.callPatient(marcus);
        doctor.diagnostique(marcus);
        personnage.paye(marcus);
        doctor.bringOut(marcus);
        personnage.payFarm(marcus);
        // alert("marcus")
        break;
    case "optimus":
        doctor.callPatient(optimus);
        doctor.diagnostique(optimus);
        personnage.paye(optimus);
        doctor.bringOut(optimus);
        personnage.payFarm(optimus);
        // alert("optimus")
        break;
    case "sangoku":
        doctor.callPatient(sangoku);
        doctor.diagnostique(sangoku);
        personnage.paye(sangoku);
        doctor.bringOut(sangoku);
        personnage.payFarm(sangoku);
        // alert("sangoku")
        break;
    case "deathvader":
        doctor.callPatient(deathvader);
        doctor.diagnostique(deathvader);
        personnage.paye(deathvader);
        doctor.bringOut(deathvader);
        personnage.payFarm(deathvader);
        // alert("deathVader")
        break;
    case "semicolon":
        doctor.callPatient(semiColon);
        doctor.diagnostique(semiColon);
        personnage.paye(semiColon);
        doctor.bringOut(semiColon);
        personnage.payFarm(semiColon);
        // alert("Semicolon")
        break;

}



