import { Combatant } from "./combatant.js"
import { Coffre } from "./coffre.js";







let monHero = prompt("entrer votre prenom : ");

alert(`Salut ${monHero}! Tu vas devoir affronter plusieurs monstres durant cette aventure, juge bien tes actions ! 
Tu peux attaquer le monstre contre qui tu te trouves en utilisant la méthode swordAttack() dans la console. 
Tu peux aussi te soigner en écrivant healingSpell() dans la console également (celà te soignera de 15Pv à chaque utilisation). 
Il n'y aura pas que des monstres durant ton aventure, tu trouveras 3 coffres tout au long de ton parcours.
Amuse toi bien et essaie de survivre !`);

// Les combatants.

let Mazar = new Combatant("Mazar", 40, 3, 7, 0);
let Goku = new Combatant("Goku", 88, 9, 8, 0);
let Bebechan = new Combatant("BebeChan", 69, 5, 3, 0);
let Zeus = new Combatant("Zeus", 99, 6, 9, 0);
let Tanjawi = new Combatant("Tanjawi", 59, 5, 6, 0);
let Casawi = new Combatant("Casawi", 60, 4, 10, 0);
monHero = new Combatant(monHero, "100", 10, 10, 0);
let participant = [Bebechan, Mazar, Zeus, Tanjawi, Casawi]





// attaque 


for (let i = 0; i < participant.length; i++) {
    while (participant[i].nbrVie >= 0 && monHero.nbrVie >= 0) {
        monHero.swordAttack(participant[i]);
        participant[i].swordAttack(monHero);
        console.log("_______________ ATTACK");


    }
        // Coffre       
        let coffre1 = new Coffre("coffre de degat et vitesse", 0, 15, 5);
        let coffre2 = new Coffre("coffre de vie et vitesse", 10, 0, 5);
        let coffre3 = new Coffre("coffre de vie et vitesse", 30, 0, 5)
        let lesCoffres = [coffre1, coffre2, coffre3];
        let choix;


        
        for (let i = 0; i < lesCoffres.length; i++) {
            lesCoffres[i] = 1//Math.floor( Math.random() * (4 -1) + 1);
            choix = lesCoffres[i];
        }



        let open = parseInt(prompt(` OOOOH il  y a un coffre
Tu veux l'ouvrir? tape 1.
tu ne veux pas l'ouvrir? tape 2 `));



        switch (choix) {
            case 1:
                // let coffre1 = new Coffre("coffre de degat et vitesse", 0, 15, 5);
                monHero.dommage += 0;
                Combatant.dommage.monHero += 15;
                Combatant.vitesse.monHero += 5;

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

        console.log(choix);
        
        Combatant.Coffre = monHero;
}
if (monHero.nbrVie > 0) {

    console.log("tu as gagner")
} else {
    console.log("tu as perdus");

}













