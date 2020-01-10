// /*afffichage de texte*/
// let nom ="zak";
// console.log("salut " +nom);
// let age = 23;
// console.log(age);
// var a=5;
// let b=5;

// console.log("la somme est " + (a+b))

// let a = 5;
// let b = 5;
// var c = 40;
// somme= a+b+c
// console.log(somme);

// let a = 5;
// let b = 6;
// let c

// c = a
// a = b
// b = c
// console.log(a +" "+ b)



// /*exo 1*/
// console.log("bonjour, ca va commencer");
// /*exo 2*/
// let a;
// let b;
// let c;
// let somme;
// let multiple;
// let total;

// a = parseInt(prompt('entrer a'));
// b = parseInt(prompt('entrer b'));
// c = parseInt(prompt('entrer c'));

// /*version1*/
// somme = a + b;
// multiple = b*c;
// total = a + b + c;

// console.log("somme  " + somme);
// console.log("le résultat " + multiple );
// /*version2*/
// console.log(a + " + " + b + " = "+ somme);
// console.log(a + " * " + b + " = "+ multiple );
// /*version*/
// console.log (a + " + " + b + " + "+ c+ " = "+ total );



// let a ;
// let b ;
// let c ;
// a = parseInt(prompt('entrer a'));
// b = parseInt(prompt('entrer b'));
// c = parseInt(prompt('entrer c'));

// if (a>b && a>c){

//         console.log("a plus grands")
//     }
//     else if (b>c){
//         console.log("b est le plus grands")
//     }
// else{
//     console.log("c est le plus grands")
// }

// let a;
// let b;

// a = parseInt(prompt('entrer a'));
// b = (a %100);

// if (b==0){
//     console.log("c'est une année séculaire")
// }
// else{
//     console.log("ce n'est pas une année séculaire")
// }


// let choix1 = (3.1 - 6.3)
// let choix2 =(6.3-3.1);

// c = parseInt(prompt('entrer l opération de votre choix : \n 1 pour (3.1 - 6.3) \n 2 pour (6.3-3.1)  '));

// if(c==1){

//     console.log("la soustraction demander est 3.1-6.3 = " + (3.1 - 6.3))
// }
// else{
//     console.log("la soustraction demander est 6.3-3.1 = " + ( 6.3-3.1))
// }

// let entier = parseInt(prompt("entrer votre entier: "));
// if(entier < 0){
//     entier = -Number
//     alert("la valeur absolue de "+entier+ " = " + entier)
// }
// else{
//     alert("impossible")
// }

/*exo4*/
// let char;
// char = parseInt(prompt('entrer votre lettre'));

// if ("A"<=char && "Z" >= char){
//     console.log("cest une majuscule")

//         }else if ("a"<= char && "z" >= char){
//         console.log("cest  une miuscule")


//         }else {
//         console.log("cest un chiffre")
//         }

// let a;
// a = parseInt(prompt('entrer entier'))

// for(i=1; i<=10;i++ ){

//     console.log(a * i)
// }

// let nom;
// nom = prompt('entrer le nom ');


// for(i=1; i<=5 ; i++){
//     console.log('salut '+ nom)
// }

// /* exo1 if else bis*/
// let a;
// a = parseInt(prompt('entrer le chiffre a controler'));

// if(a >= 0 && a<=9 ){
//     console.log('ce chiffre est positif')
// } else if (a >= 10){
//     console.log('ce nombre est positif')
// }
// else {
//     console.log('ce chiffre est negatif')
// }

// /* exo 3 if else bis*/

// let a , b , c;
// let choix;

// a = parseInt(prompt('entrer le premier chiffre' ));
// b = parseInt(prompt('entrer le deuxieme chiffre' ));
// c = parseInt(prompt('entrer le troisième chiffre' ));
// choix = parseInt(prompt('1:afficher la valeur plus petit \n  2:afficher la valeur plus grand ' ));

// if( choix == 1){
//     if( a<b && a<c){
//         console.log(a +' est le plus petit chiffre')
//     } else if( b<a && b<c ){
//         console.log(b +' est le plus petit chiffre')
//     } else{
//         console.log(c +' est le plus petit  chiffre')
// }
// }
// else if (choix ==2){
//     if( a>b && a>c){
//     console.log(a +' est le plus grand chiffre')
// } else if( b>a && b>c ){
//     console.log(b +' est le plus grand chiffre')
// } else{
//     console.log(c +' est le plus grand chiffre')
// }
// }

// /* exo supplémentaire*/
// let a, b;
// a = prompt("introduire votre nom");
// b = parseInt(prompt('introduire votre âge'));

// console.log('je m appel ' + a + ' j ai '+ b +' ans')

// let a = 2;
// a -= 1;
// a++;
// let b = 8;
// b += 2;
// const c = a + b * b;
// const d = a * b + b;
// const e = a * (b + b);
// const f = a * b / a;
// const g = b / a * a;
// console.log(a, b, c, d, e, f, g);

// const tempCel = 37.7;
// const faran = tempCel *9/5+32; ;

// console.log(faran);



// let  temperature ;
// let formule;
// temperature = parseInt(prompt( 'entrer la température ressentis'))
// if (temperature <= 0) {
//   console.log("Il gèle");
// }
// else {
//   console.log("Il ne fait pas si froid");
// }

// formule = prompt(' entrer la formule magique')
// if (formule === "abracadabra") {
//   console.log("C'est la formule magique !");
// }
// else {
//   console.log("Ce n'est pas la bonne formule...");
// }

// let moyenneDeJess;
// moyenneDeJess = parseInt(prompt('introduit ta moyenne'));
// if (moyenneDeJess < 10){
//     console.log('vous avez été recaler, nous sommes désolé')
//     }
// else if (moyenneDeJess <= 10 || moyenneDeJess <= 12){
//     console.log('vous avez été reçus, Bravo!!!')

// }
// else if ( moyenneDeJess > 12 && moyenneDeJess <=20){
//     console.log('vous avez été reçus avec mention , Excellent ')
// }

// else{
//     console.log('Impossible mytho')
// }

// console.log("Début du programme");
// let nombre = 1;
// while (nombre <= 5) {
//   console.log(nombre);
//   nombre++;
// }
//console.log("Fin du programme");



// let nbrDeTour ;
// nbrDeTour = parseInt(prompt('entrer le nombre de tour souhaiter'));
// let compteur = 1;




// while (compteur <= nbrDeTour) {
//     console.log('tour numero' + compteur)
//     compteur++
// }

// console.log('terminer');

// let table ;

// table =  parseInt(prompt('entrer la table souhaiter'));

// for( let i = 0 ; i<= 10 ; i++){
//     console.log(i+' x '+table+ ' = '+ i*table);
// }


// let note1= parseInt(prompt('entre votre note 1 '));
// let note2= parseInt(prompt('entre votre note 2 '));
// let note3= parseInt(prompt('entre votre note 3 '));
// let note4= parseInt(prompt('entre votre note 4 '));

// let compteur=0;

//  if(note1 < 10){
//      compteur++;
//  }
//  if(note2 < 10){
//     compteur++;
// }
// if(note3 < 10){
//     compteur++;
// }
// if(note4 < 10){
//     compteur++;
// }
// console.log('tu as raté '+ compteur);

// let nb = parseInt(prompt("nb"));

// if(nb%3 == 0 && nb%5 == 0){
//     console.log(nb + ' est divisible par 3 et 5')
// }else {
//     alert('ce nombre ne divise pas 3 et 5')
// }

// let nb1 = parseInt(prompt('nb1'));
// let nb2 = parseInt(prompt('nb2'));

// if (nb1>= 100 && nb1 <= 200 && nb2>= 100 && nb2 <= 200){
//     alert("les 2 nombre sont entre 100  et  200")
// }else {
//     alert("l'un des deux ou les deux ne sont pas entre 100 et 200")
// }


// let nb1 = parseInt(prompt('nb1'));
// let nb2 = parseInt(prompt('nb2'));

// if (nb2%2 ==0){
//     alert(nb2 +' est paire')
//      if (nb2 >= nb1 && nb2 <=( nb1*2)) {
//         alert(nb2 +' est compris entre a et le double de a')
//     } else {
//         alert("il n'est pas compris entre a et le double de a")
//     }

// }

// else {
//     if (nb2 >= nb1 && nb2 <= ( nb1 + nb2)) {
//         alert(nb2 +' est compris entre a+b')
//     }
//     else{
//         alert('b nest pas compris entre a et b ')
//     }
// }


/* les tableau*/
// let tableau = [];
// for(let i = 9 ; i >=0;i--){
//     tableau[9-i]= i+1;
// }
// console.log(tableau)

// let table1 = [5,-6,12,-4,0];
// let table2 = [10, 4, 3, 8, 7];
// let scalaire = 0;

// for(let i=0 ; i<5;i++ ){
//     scalaire += table1[i] * table2[i]
// }


// console.log(scalaire);

// let table12 = [1,2,3,4,5,6,7,8,9,10];

//     for (i = 0 ; i <12; i++){
//         if(table12[i] % 2==0){
//             console.log(table12[i]+ ' est paire'  )
//             console.log(i)
//         }


//     }

// let table = [2,3,33,4,2,6,5,3,2,7];
// let a ;
// let compteur=0;
// a= parseInt(prompt('entrer votre recherche'));
// for(i = 0 ; i<table.length; i++){
//     if (table[i] == a){

//     }
// }
// console.log('il est present' + compteur)


// let tmp;
// let max = parseInt(prompt('Entrez max'));
// let min = parseInt(prompt('Entrez min'));

// if (max < min) {
//     tmp = min;
//     min = max;
//     max = tmp;
// }


// let tarray = [];
// let long = parseInt(prompt('Longueur du tableau:'));

// for (i = 0; i < long; i++) {
//     tarray[i] = parseInt(Math.random() * (1 + max - min) + min);
// }

// for (let i = 0; i < tarray.length; i++) {
//     for (let j = i + 1; j < tarray.length; j++) {
//         if (tarray[i] > tarray[j]) {
//             tmp = tarray[i];
//             tarray[i] = tarray[j];
//             tarray[j] = tmp;
//         }
//     }
// }

// console.log(tarray);

// let entier1 = parseInt(prompt('entrer entier 1'));
// let entier2 = parseInt(prompt('entrer entier 2'));
// let somme = 0;
// while(entier1 < entier2){
//     somme += entier2;
//     entier2 = parseInt(prompt('entrer chiffre'))



// }
// console.log(somme)

// let entier1 = parseInt(prompt('entrer entier 1'));
// let somme = 0;

// while (entier1 < 10  && entier1 > -10){
//     somme += entier1;
//     entier1 = parseInt(prompt('entrer un nombre'));

//  }
//  console.log('la reponse de l addition des entiers compris entre -10 et 10 est '+ somme)


//

// let nb =parseInt(prompt('entrer un nb'))

// while (nb != 0){
//     if (nb >= 1 && nb <= 20){
//         if(nb%2 == 0){
//             console.log('il est paire')
//         }else {
//             console.log('il est impaire')
//         }
//     }else{
//         console.log('Entrer un nombre entre 1 et 20 SVP')
//     }

//     nb = parseInt(prompt('entre un nouveau'))
// }
// console.log('vous etes sortis de la boucles ')

// let nb;

// do{
//     nb = parseInt(prompt('entrer un nb'));
//     if (nb >= 1 && nb <= 20){
//         if(nb %2 == 0){
//              console.log("il est paire");
//         }
//         else{
//         console.log('il n est pas paire');
//         }
//     }else{
//         console.log('entre un chiffre entre 1 et 20 stp')
//     }
// }while (nb != 0){

//     console.log('Merci aurevoir')
// }

// let nb;

// do{
//     nb = parseInt(prompt(" entrer un nb"));
//     if(nb >= 1 && nb <= 20){

//         if(nb %2 == 0){
//             console.log('il est paire');
//         }else{
//             console.log("iln'est pas paire");
//         }
//     }
// }while(nb >= 1 && nb <= 20);
// alert("merci aurevoir ");


// let nb;
// let somme =0;
// let moyenne ;
// let i=0;
// do{
//     nb = parseInt(prompt("entrer vos entier"));
//     somme += nb;
//     i++


// }while(nb != 0);
// moyenne = somme /i;
// console.log(moyenne);

// let nb;
// let i=0;

// do{
// nb =parseInt(prompt("entrer vos entier"));
// if(nb%2 ==0){
//     console.log('c est paire')
//     }else{
//         console.log("c'est impaire ")
//     }

// i++

// }while(i !=20);
// console.log("c'est fini")





// for (i = 0; i <= tabProduit.length; i++) {
//     produit = prompt("entrer votre produit");
//     tabProduit.push(produit);
//     console.log(tabProduit)

//     for (i = 0; i <= tabQuantite.length; i++) {
//         quantite = parsInt(prompt("entrer votre produit"));
//         tabQuantite.push(quantite);
//     }
//          for (i = 0; i <= tabPrix.length; i++) {
//             prix = prompt("entrer votre produit");
//             tabPrix.push(prix);
//     }
// let produit;
// let prix;
// let quantite;
// let arrayProduit = [];
// let somme = 0;
// let reduction;
// let totReduction = 0;

// produit = prompt("Inserez produit");


// while (produit != "stop") {
//     prix = parseFloat(prompt("Inserez Prix"));
//     quantite = parseInt(prompt("Inserez quantite"));
//     somme += (prix * quantite);
//     arrayproduit.push(produit);
//     produit = prompt("Inserez produit");
// }
// do {
//     reduction = parseInt(prompt('Inserez la reduction'));
//     totReduction += reduction;
// } while (reduction != 0);
// for (let i = 0; i < arrayproduit.length; i++) {
//     console.log(arrayproduit[i]);
// }
// console.log("---------------------------");
// console.log("Total: " + somme);
// console.log("Reduction: " + totReduction + "%");
// somme = somme * ((100 - totReduction) / 100);
// console.log("\n \nTotal a payer: " + somme);

// let onizuka = [];
// let joker = [];
// let starwars = [];
// let compteurIllustrator = 0;
// let compteurPremierepro = 0;
// let compteurPhotoshop = 0;
// let photoshop;
// let permierpro;
// let illustrator;
// let choix;
// let inscription;
// let i;

// choix = prompt("quel formation désirez vous suivre \n taper 1 pour photoshop \n taper 2 pour premierpro \n taper 3 pour illustrator \n 0 pour annuler  ")

// while (choix != 0) {

//     if (choix == 1) {
//         inscription = prompt("entrer le nom ");
//         if (compteurPhotoshop <= 4) {
//             onizuka.push(inscription);
//             for (i = 0; i < 3; i++) {
//                 compteurPhotoshop++;
//             }


//             console.log("Vous avez bien été inscrits ")

//         } else {
//             console.log("Impossible plus de place, reeseyer a la prochiane formation")
//             choix = prompt("quel formation désirez vous suivre \n taper 2 pour premierpro \n taper 3 pour illustrator \n 0 pour annuler  ")

//             /*quand ya plus de place a la 1*/
//             if (choix == 2) {
//                 if (compteurPremierepro <= 4) {
//                     inscription = prompt("entrer le nom ");
//                     joker.push(inscription);
//                     for (i = 0; i < 3; i++) {
//                         compteurPremierepro++;
//                     }


//                     console.log("Vous avez bien été inscrits ")

//                 } else {
//                     console.log("Impossible plus de place, reeseyer a la prochiane formation")

//                 }
//             }


//             else {
//                 if (compteurIllustrator <= 4) {
//                     inscription = prompt("entrer le nom ");

//                     starwars.push(inscription);
//                     for (i = 0; i < 3; i++) {
//                         compteurIllustrator++;
//                     }


//                     console.log("Vous avez bien été inscrits ")

//                 } else {
//                     console.log("Impossible plus de place, reeseyer a la prochiane formation")
//                 }

//             }
//             choix = prompt("quel formation désirez vous suivre \n taper 1 pour photoshop \n taper 2 pour premierpro \n taper 3 pour illustrator \n 0 pour annuler  ")



//         }
//         /* choix 2*/
//     } else if (choix == 2) {
//         if (compteurPremierepro <= 4) {
//             inscription = prompt("entrer le nom ");
//             joker.push(inscription);
//             for (i = 0; i < 3; i++) {
//                 compteurPremierepro++;
//             }


//             console.log("Vous avez bien été inscrits ")

//         } else {
//             console.log("Impossible plus de place, reeseyer a la prochiane formation")

//         }
//     }


//     else {
//         if (compteurIllustrator <= 4) {
//             inscription = prompt("entrer le nom ");

//             starwars.push(inscription);
//             for (i = 0; i < 3; i++) {
//                 compteurIllustrator++;
//             }


//             console.log("Vous avez bien été inscrits ")

//         } else {
//             console.log("Impossible plus de place, reeseyer a la prochiane formation")
//         }

//     }
//     choix = prompt("quel formation désirez vous suivre \n taper 1 pour photoshop \n taper 2 pour premierpro \n taper 3 pour illustrator \n 0 pour annuler  ")

// }
// console.log(joker);
// console.log(onizuka);
// console.log(starwars);



// let start;
// let nb = 0;
// let compteur = 0;
// let modulo = (nb % 2);

// start = parseInt(prompt(" 1: pour enclancher la serie \n 0: pour l'arreter"));

// while(start != 0){
//     while(nb < 101){
//        nb=compteur++;
//     if(modulo==0){
//         console.log(modulo)
//     }else {
//         console.log(" - ")
//     }
//     }

// }

// do{
//     while(start != 0){
//         nb = compteur++
//     }
// }

// while (start != 0) {
//     do {
//         for (let i = 0; i < 100; i++) {
//             if (i % 2 == 0) {
//                 console.log(i + " paire")
//             } else {
//                 console.log(" - ")
//             }
//         }
//     } while (i < 101);




// }

// let somme = 0;
// let entier;

// do {
//     entier = parseFloat(prompt("entrer entier"));
//     somme += entier;
//     alert(entier)


// } while (somme != 0);
// console.log(somme);


// let nb;
// let value;
// do{
//     nb = parseFloat(prompt("entrer un entier"))
//     value = Math.abs(nb)
//     console.log(value + " et "+ nb)
// }while(value >=5 && value <=10);
// console.log("allez va apprendre a lire les consignes")

// let nb;
// let value;
// let somme = 0;
// let tabPaire = [];
// let compteur = 0;

// nb = parseInt(prompt("entrer un entier :"));


// do {
//     somme += nb;
//     if (nb % 2 == 0) {
//         compteur++;
//         if (compteur == 6) {
//             alert(somme)
//         } else {
//             nb = parseInt(prompt("entrer un entier :"));

//         }

//     }
//     else {
//         nb = parseInt(prompt("entrer un entier :"));
//     }



// } while (compteur != 6);
// console.log(somme + " et " + compteur);

// let somme= 0;
// let nb1, nb2;
// let resultat;

//     nb1 = parseInt(prompt(" entrer premier nombre :"));
//     nb2 = parseInt(prompt(" Entrer deuxiemme nombre : "))
// do{


//     somme = nb1 + nb2;
//     resultat = parseInt(prompt("Entrer le resultat :"));
//     if(resultat == somme){
//         alert("oooh bravo bonne réponse")
//     }
//     else{
//         alert("c'eest faux recommence");
//     }




// }while(resultat != somme);
// let compteur = 0;
// let somme = 0;
// let moyenne = 0;
// let nb = parseInt(prompt(" entrer un chiffre positif"));

// do{
//     if(nb  >= 0){
//         compteur++;
//         somme+=nb;

//     }
//     else{
//         alerte("recommence ce n'est pas un chiffre positif");
//     }
//      nb = parseInt(prompt(" entrer un chiffre positif"));


// }while(nb != 0);
// console.log( somme + " + " +compteur+   " = "+ (moyenne = somme/compteur));

// let nb;
// let tab = [];
// let i =0;

// nb = parseInt(prompt("Entrer un chiffre  au choix"));

// do{
//     tab.push(nb);
//     for( i=0 ; i < tab.length;i++);

//     nb = parseInt(prompt("Entrer un chiffre  au choix"));


// }while(nb != 0);
// console.log(tab);
// console.log(Math.min.apply(null, tab));
// console.log(Math.max.apply(null, tab));

// let nb;
// let tab=[];
// let i = 0;
// let somme = 0;

// nb = parseInt(prompt("entrer un chiffre svp"))

// do{
//     tab.push(nb)
//     for(i = 0; i  < tab.length; i++){
//         somme = tab.length[-1]+tab.length[-2]+tab.length[-3];

//     }
//     nb = parseInt(prompt("entrer un chiffre svp"))

// }while(nb != 0);
// Console.log(tab);
// console.log(tab.length[-1]+" + "+tab.length[-2]+" +" + tab.length[-3]+" = "+somme);

/*  Switch*/
// let nom = "Le calendrier de la CODING 11"
// let choix = parseInt(prompt(`${nom}

// 1. lundi
// 2. mardi
// 3. Mercredi
// 4. Jeudi
// 5. vendredi
// 6. Samedi
// 7. Dimanche`));

// switch (choix) {
//     case 1:
//         alert("Lundi ")    ;
//         break;

//     case 2:
//         alert("Mardi");
//         break;

//     case 3:
//         alert("Mercredi");
//         break;

//     case 4:
//         alert("Jeudi");
//         break;

//     case 5:
//         alert("Vendredi");
//         break;

//     case 6:
//         alert("samedi");
//         break;
//     case 7:
//         alert("Dimanche");
//         break;


//     default:
//         alert("aucun choix ne correspond a votre demande");
//         break;

// }

// let nb1, nb2;
// let menu = "Choix des opérations ";

// nb1 = parseInt(prompt("entrer le premier chiffre"));
// nb2 = parseInt(prompt("entrer le premier chiffre"));

// let choix = parseInt(prompt(`Veuillez choisir l'opération de votre choix
// 1: Addition
// 2: Multiplication
// 3: Soustraction
// 4: Division`));

// switch (choix) {
//     case 1:
//         let somme = nb1+nb2;
//         alert(nb1+" + "+nb2+" = "+ somme)
//         break;
//     case 2:
//         let Multiplication = nb1*nb2;
//         alert(nb1+" * "+nb2+" = "+ Multiplication)
//         break;
//     case 3:
//         let soustraction= nb1-nb2;
//         alert(nb1+" - "+nb2+" = "+ soustraction)
//         break;
//     case 4:
//         let division= nb1/nb2;
//         alert(nb1+" / "+nb2+" = "+ division)
//         break;
// }

// let choix = parseInt(prompt(`Entrer votre choix :
// 1. janvier
// 2. février
// 3. Mars
// 4. Avril
// 5. Mai
// 6. juin
// 7. Juillet
// 8. Aout
// 9. Septembre
// 10. Octobre
// 11. Novembre
// 12. Décembre`))

// switch (choix) {
//     case 1:
//     case 2:
//     case 12:
//         alert("hiver");
//         break;
//     case 3:
//     case 4:
//     case 5:
//         alert("Printemps");
//         break;
//     case 6:
//     case 7:
//     case 8:
//         alert("ETE");
//         break;
//     case 9:
//     case 10:
//     case 11:
//         alert("Automne");
//         break;

// }

/* LES FONCTIONS*/


// function affichage(a,b){
//     let somme = a+b;
//     console.log(somme)
// }

// let k = parseInt(prompt("entre a"))
// let l = parseInt(prompt("entre b"))
// affichage(k,l);

// function remplir(tab = []) {

//     for (let i = 0; i < 4; i++) {
//         nb = parseInt(prompt("entrer 20 entier"))
//         tab.push(nb);

//     }


// }

// function moyenne(tab) {
//     let somme = 0;
//     let moyenne= 0;
//     for(let i=0; i<tab.length; i++){
//         somme+= tab[i];

//     }

//     moyenne = somme / tab.length;

//     return moyenne
// }

// let tarray = [];
// let average;

// remplir(tarray)
// average = moyenne(tarray)

// console.log(tarray)
// console.log(average);

// EXO2
// Soit une table de 10 entiers et une autre table de maximum 5 entiers.
// a) Function pour remplir les tables
// b) Function pour multiplier chaque élément de la 1ère table par chaque élément de la 2ème.
// c) Function pour afficher une table (appelée 3 fois pour afficher la 1ère table, la 2ème table et la 1ère à nouveau après modification).


// function remplir(tab = []) {
//     for (let i = 0; i < 10; i++) {
//         nb = parseInt(prompt("entrer 10 entier"));
//         tab.push(nb);
//     }
// }

// function multiplication (tab, tab2){
//     for( let i = 0; i <tab.length; i++){
//         for(let j =0; j<= tab2.length; j ++){
//             tab[i] *= tab2[j];

//         }
//     }
// }
// let tarray = [];
// let tarray2 = [2,3,4,4,8,7];
// let multi;


// remplir(tarray);
// console.log(tarray)
// multiplication( tarray,tarray2);
// console.log(tarray2)


// console.log(tarray)

// function remplir(array,dim){
//     for(let i=0; i <dim; i++){
//         array[i]=parseInt(Math.random()*(21-1)+1);   /*(((1+max)-min)+min) = math random */
//     }

// }

// function affichage(array){
//     console.log(array);
// }

// function multiplication(array1,array2){
//     for(let i =0; i<array1.length;i++){
//         for(let j=0; j < array2.length;j++ ){
//             array1[i] *= array2[j];
//         }
//     }
// }

// let tarray1=[], tarray2=[];
// let dim;

// do{
//     dim = parseInt(prompt("dim tarray2"));
// }while(dim < 1 || dim > 5);

// remplir(tarray1,10);
// remplir(tarray2,dim);

// affichage(tarray1);
// affichage(tarray2);

// multiplication(tarray1,tarray2);

// affichage(tarray1)


// EXO3
// Soit une table de maximum 25 entiers.
//  a) Function pour remplir la table.
//  b) Function qui reçoit la table, un indice d'un élément de la table et qui enlève cet élément de
//   la table en tassant les éléments suivants.
//  c) Function pour afficher une table (appelée 2 fois pour afficher la table avant et après modification).
//  2ème version :
// b) On ne passe plus l'indice d'un élément mais l'élément qui si il existe est supprimé


// function remplir(array){
//     for(let i= 0; i<dim ;i++){
//         array[i]=parseInt(Math.random()*(26-1)+1);
//     }
// }

// function supprimer(array){

//     array.splice(indice,1);
// }

//  function supElement(array){
//      array.splice(array.indexOf(value),1)
//  }

// let tarray1 = [];
// let dim = parseInt(prompt("dim?"));
// let  indice = parseInt(prompt("entrer l'indice a supprimer"));


// console.log(tarray1);

// remplir(tarray1);
// console.log(tarray1);

// supprimer(tarray1);
// console.log(tarray1);


// value = parseInt(prompt("entrer l'element a supp"))

// supElement(tarray1)
// console.log(tarray1);


// EXO4
// Soit 2 tables des nombres de dimensions variables différents.
//  Soustraire les éléments de la plus petite à celle de la plus grande.
//  a) Functionpour remplir les tables.
//   b) Functionpour faire le calcul.


// let tarray1 = [], tarray2 = [];


// function remplir(array1, array2) {
//     for (i = 0; i < 10; i++) {
//         array1[i] = parseInt(Math.random() * (26 - 1) + 1);
//     }
//     for (i = 0; i < 5; i++) {
//         array2[i] = parseInt(Math.random() * (26 - 1) + 1);
//     }
// }

// function soustraction(a, b) {
//     let resultat = [];

//     if(a.length>b.length){
//         for(let i=0; i<b.length; i++){
//             resultat.push(a[i]-b[i]);

//         }
//     }else{
//         for(let i= 0; i<a.length;i++){
//             resultat.push(b[i]-a[i]);

//         }
//     }

// return resultat;

// }





// remplir(tarray1, tarray2);
// console.log(tarray1, tarray2);
// console.log(soustraction(tarray1, tarray2));

// let tab = []

// function remplir(array, dim,i){
//     if( i < dim){
//         array[i]= parseInt(Math.random()*(1+20-1)+1);
//         i++;
//         remplir(array,dim,i);
//     }


// }

// do{
//     dim = parseInt(prompt("veillez entrer les dimensions "))

// }while(dim <1 || dim > 20)



// remplir(tab,dim,0);
// console.log(tab)


/* Exercice Supplementaire
Nous sommes a la gare et nous n'avons toujours pas choisis notre destination.
un programme nous demande un choix entre 5 destinations.
ensuite il te donne les prix pour chaque destinations entrer.
Des promotions de 10% pour les pensions, 15% etudiant , chomage 25% .
enfin , le programme vous affiche le montant finale avec la promotions.*/

// let menu = "NOS DESTINATIONS"
// let promos = "Nos Promotions"
// let choix = prompt(`${menu}
// Paris.
// Madrid.
// Bruxelles;
// Rome.
// Oujda `).toLowerCase();

// let status = parseInt(prompt(`${promos}
// 1. retraite
// 2. etudiant
// 3. chomage
// 4. aucun`));

// function promo(a, b) {
//     promo = (a-(a/100)* b );

//     return promo;
// }

// function stat(a) {

//     if (a == 1) {
//         prix = promo(prix, 10);
//         console.log(promo + " euros");
//     } else if (a == 2) {
//         prix = promo(prix, 15);
//         console.log(promo + " euros");
//     }
//     else if (a == 3) {
//         prix = promo(prix, 25);
//         console.log(promo + " euros");
//     } else {
//         console.log("pas de promo pour vous, le prix de votre voyage est de  "+prix)
//     }

//     return stat;

// }



// let prix;
// switch (choix) {
//     case "rome":
//         prix = 18;
//         stat(status);
//         // alert("le voyage coute 18 euros");
//         break;
//     case "madrid": prix = 43;
//         stat(status);
//         // alert("le voyage coute 43 euros");
//         break;
//     case "bruxelles": prix = 10;
//         stat(status);
//         // alert("le voyage coute 10 euros");
//         break;
//     case "paris": prix = 50;
//         stat(status);
//         // alert("le voyage coute 50 euros");
//         break;
//     case "oujda": prix = 100;
//         stat(status);
//         // alert("le voyage coute 100 euros");
//         break;
// }



// // console.log(choix)
// // stat (status)
// // console.log(choix)

//Les Objets

// let personne = {
//     nom: "Zak",
//     prenom: "yah",
//     age: 27,
// }
// let personne2 = {
//     nom: "Sofian",
//     prenom: "yah",
//     age: 27,
// }
// console.log(`Bonjour, je suis ${personne.nom} et j'ai ${personne.age} ans`)
// personne.nom = "André";
// personne.age = 23
// console.log(`Bonjour, je suis ${personne.nom} et j'ai ${personne.age} ans`)

// //Les classes

// class Personne {
//     constructor(nom, prenom, age) {
//         this.nom = nom;
//         this.prenom = prenom;
//         this.age = age;
//     }
//     saluer(age){
//         console.log("salut je suis "+this.nom +"  j'ai "+ age)
//     }
// }
// let zak = new Personne("Zak", "Yah", 27)
// let andre = new Personne("André", "Santos", 23)
// //.this -> signification => c'est l'objet que nous outlisons
// console.log(zak)
// console.log(andre)
// zak.saluer(23)

// import {Local} from "./local.js";

// let onizuka = new Local(5,0);
// let nom;
// while (onizuka.personne.length < onizuka.nbPlace){
//     nom = prompt("entre le nom");
//     onizuka.personne.push(nom);
// }


// console.log(onizuka)

// import {personne} from"./personne.js";

// let maVie, monQuartier,maConstance;
// const gravite = 9.81;
// function entierAleatoire(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// function entrerNom(a) {
//     a = prompt("entrer nom")
//     return entrerNom;
// }







// class Local {
//     constructor(nbPlace, personne, age) {
//         this.nbPlace = nbPlace;
//         this.personne = [];
//         this.age = [];
//     }
// }



// let liste = new Local(4, 0, 0);
// let nom;

// for(let i =0;i<=4;i++){
//     nom = prompt("entre le nom");
//     liste.personne.push(nom);
//     let ageHasard = Math.floor(Math.random() * (18 - 10 + 1) + 10);
//     liste.age.push(ageHasard);
    
// }

// console.log(liste)





let nom =  ['zak', 'zakaria', 'rayan', 'antoine', 'crahlo', 'antoine', 'alex', 'junior', 'myriame', 'bouba', 'soufian', 'adjani', 'sim', 'cicario'];


// for( let i = 20; i >= 0;i-=2){
//     if ( i!=0){
//         console.log(i+" - ")
//     }else{
//         console.log(i)
//     }
// }$
// console.log(nom);
// for(let i=0; i < nom.length ; i++){
//     nom[i]= nom[i].charAt(0).toUpperCase()+nom[i].substring(1);

// }

// console.log(nom);
function message(){
    setTimeout(console.log('température a augmenter de 20 °C'), 2000, ); 
}


class liquide{
    constructor(typeLiquide,tmp,volume){
        this.typeLiquide= typeLiquide;
        this.tmp = tmp;
        this.volume = volume;
    }
}

class Bouillioire{
    constructor(){

    }
    chauffer(parametre){
        if(parametre.tmp < 100){
            message(parametre.tmp)
            parametre.tmp += 20;
            console.log("temp "+ parametre.tmp)
            this.chauffer(parametre)
        }else{
            console.log("l 'eau est chaude, elle est a 100°");
        }
    }
}

let eau = new liquide("eau ", 20,1);
let bouillioire = new Bouillioire();
bouillioire.chauffer(eau);
