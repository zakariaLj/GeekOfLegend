import { Personne } from './personne.js';
import { Produit } from './Produit.js';
import { Outils } from './outils.js';
import { Epicerie } from './epicerie.js';
import { Maison } from './maison.js';
import { Poele } from './poele.js';
import { Bol, NewMelange } from './bol.js';


// ____________________________________Début du Projet sur l'omelette______________________________________



// objet de classe produit

let frommage = new Produit("frommage", "tranche", 2.5);
let oeuf = new Produit("oeuf", "entier", 3);
let epices = new Produit("epices", "poudre", 2.5);
let ognion = new Produit("ognion", "entier", 4);
let ingredient = [frommage, oeuf, epices, ognion];

// objet de class personne

let zakaria = new Personne("zakaria", "bruxelles", 100, [], []);
let maison = new Maison("maison", 0);
let epicerie = new Epicerie("L'epicerie de Aziz Le Malefique", 0, 7, 0, ingredient);
let bolle = new Bol([]);
let omelette = new NewMelange("omelette", "pas cuite");
let poele = new Poele("");




zakaria.seDeplacer("maison");

console.log("________________________________________________________maison_________________________________");

zakaria.seDeplacer("epicerie");

console.log("________________________________________________________Epicerie   ____________________________");

console.log(`il y'a ${epicerie.panier} panier dans son epicerie`);
console.log(`${zakaria.nom} entre dans ${epicerie.nom}`);
epicerie.personnes = zakaria;
epicerie.panier -= 1;
zakaria.mainDroite.push('panier')
// console.log(zakaria.mainDroite);

console.log("_______________________________________________ Goooo prendre ce qu'il faut_____________________");


// boucle for afin de prendre un ingredient et de le mettre dans le  panier

for (let i = 0; i < epicerie.ingredient.length; i++) {
    epicerie.contenuePanier.push(ingredient[i]);
    console.log(`${epicerie.ingredient[i].nom}`);
    console.log(`${epicerie.contenuePanier[i].nom} a ete ajouter a votre panier`);

}


console.log(epicerie.contenuePanier);

console.log("_________________________________________________________Passage en caisse______________________");

// boucle pour payer les ingredient 1 a 1
console.log(" Ticket de chez Aziz le Malefique");

console.log(`<---------------------------->`)
let total = 0;
for (let i = 0; i < epicerie.contenuePanier.length; i++) {



    zakaria.payerArticle(epicerie.contenuePanier[i])
    total += epicerie.contenuePanier[i].prix;


}
console.log(`<---------------------------->`)
console.log("le total : " + total + " euros");

let reste = zakaria.argent - total;

console.log(`          TOTAL
vous avez payer avec ${zakaria.argent} euros 
${reste} euros de retour`);

zakaria.argent = reste;

console.log(zakaria.argent);




console.log('________________________________________________ back Home_____________________________________________')

zakaria.seDeplacer("maison");


console.log(epicerie.contenuePanier);

while(epicerie.contenuePanier.length > 0) {

    bolle.contenu.push(epicerie.contenuePanier[0]);
    console.log(epicerie.contenuePanier[0].nom);
    console.log(`${epicerie.contenuePanier[0].nom} est dans le bolle`);
    epicerie.contenuePanier.shift()

    




}

console.log(`${epicerie.contenuePanier }panier vide`);

console.log('________________________________________________ back to Epicerie_____________________________________________')

zakaria.seDeplacer("epicerie");

console.log(zakaria.mainDroite);
console.log(epicerie.panier + " paniers sont dans l'epicerie");
epicerie.panier += 1;
console.log(epicerie.panier+ " paniers sont dans l'epicerie");


console.log('________________________________________________ back Home_____________________________________________')


zakaria.seDeplacer("maison");

console.log(`On vas couper les ingredients `)
for (let i = 0; i < ingredient.length; i++ ) {
    zakaria.couper(ingredient[i])

    console.log("-------------------------");
    
}


console.log(`____________________________________`);
console.log(` ${omelette.nomMelange} ${omelette.etat}`);

console.log("nous allons verser le contenu du bolle sur notre poele");

poele.contenu = bolle.contenu;
poele.cuir()

