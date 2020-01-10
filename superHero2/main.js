import { Combatant, Monhero } from "./personnage.js";





// les participants;
let hero = prompt("entrer votre nom de hero")
let Mazar = new Combatant("Mazar", 40, 3, 7, 0);
let Goku = new Combatant("Goku", 88, 9, 8, 0);
let Bebechan = new Combatant("BebeChan", 69, 5, 3, 0);
let Zeus = new Combatant("Zeus", 99, 6, 9, 0);
let Tanjawi = new Combatant("Tanjawi", 59, 5, 6, 0);
let Casawi = new Combatant("Casawi", 60, 4, 10, 0);
hero = new Monhero(hero, "100", 10, 10, 0);
let participant = [Bebechan, Mazar, Zeus, Tanjawi, Goku, Casawi]

// Combat

// choisis un participant au hasard et affronte mon hero
for (let i = 0; i < participant.length; i++) {
    participant[i] == Math.floor(Math.random() * (7-1)+1);
    while (participant[i].nbrVie >= 0 && hero.nbrVie >= 0) {

        console.log(participant[i].name)
        hero.swordAttack(participant[i])
        participant[i].swordAttack(hero);
    }
console.log("__________________________________");

let open = parseInt(prompt(` OOOOH il  y a un coffre
Tu veux l'ouvrir? tape 1.
tu ne veux pas l'ouvrir? tape 2 `));
       switch (open) {
           case 1:
               // let coffre1 = new Coffre("coffre de degat et vitesse", 0, 15, 5);
               hero.nbrVie += 0;
               hero.dommage += 15;
               hero.vitesse += 5;
               break;
           case 2:
               // let coffre2 = new Coffre("coffre de vie et vitesse", 10, 0, 5);
               Combatant.nbrVie += 10;
               Combatant.dommage += 0;
               Combatant.vitesse += 5;
               break;
           case 3:
               // let coffre3 = new Coffre("coffre de vie et vitesse", 30, 0, 5)
               Combatant.nbrVie += 30;
               Combatant.dommage += 0;
               Combatant.vitesse += 5;
           default:
               break;
       }
       console.log(open);
       Combatant.Coffre = hero;
}
if (hero.nbrVie > 0) {
   console.log("tu as gagner")
} else {
   console.log("tu as perdus");

}


























// combat



// for (let i = 0; i < participant.length; i++) {
//     while (participant[i].nbrVie >= 0 && hero.nbrVie >= 0) {
//         hero.swordAttack(participant[i]);
//         participant[i].swordAttack(hero);
//         console.log("_______________ ATTACK");


//     }
//         // Coffre       
//         let coffre1 = new Coffre("coffre de degat et vitesse", 0, 15, 5);
//         let coffre2 = new Coffre("coffre de vie et vitesse", 10, 0, 5);
//         let coffre3 = new Coffre("coffre de vie et vitesse", 30, 0, 5)
//         let lesCoffres = [coffre1, coffre2, coffre3];
//         let choix;



//         for (let i = 0; i < lesCoffres.length; i++) {
//             lesCoffres[i] = 1//Math.floor( Math.random() * (4 -1) + 1);
//             choix = lesCoffres[i];
//         }
