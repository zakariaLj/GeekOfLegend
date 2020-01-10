// //   EXO 1 BY ZAK///ROULETTE RUSSE
// let gun = [0, 0, 0, 0, 0, 0];
// let balle = 1;
// let vie = true;
// let mort = false;


// while (vie == true) {
//     let chargerLeGun = parseInt(prompt("cliquez sur un pour charger le gun"));
//     if (chargerLeGun == 1) {
//         for (let i = 0; i < gun.length; i++) {
//             i = Math.floor(Math.random() * 6);
//             if (gun[i] == 0) {
//                 gun[i] = balle;
//                 alert(gun);
//                 let shoot = parseInt(prompt("pour tirer taper 1"));
//                 if (shoot == 1) {
//                     i = Math.floor(Math.random() * 6);
//                 }
//                 if (gun[i] != balle) {
//                     console.log("try again");
//                 } else {
//                     vie = mort;
//                     console.log(" vous etes mort");
//                 }
//                 //shoot
//             }
//         }
//     }// rechargeGun
// }
// alert(" merci au revoir")



class MotRechercher {
    constructor(nom) {
        this.nom = nom;
    }
}

let Mot = new Array(3);

Mot[0] = new MotRechercher (["barca"]);
Mot[1] = new MotRechercher (["madrid"]);
Mot[2] = new MotRechercher (["rome"]);

for (let i = 0; i < 4; i++) {
    i = Math.floor(Math.random() * 3);
    if (i == 0) {
        let table = ["_","_","_","_","_"];
        console.log(table);
        
    }else if(i == 1){
        let table1 = ["_","_","_","_","_","_"];
        console.log(table1);
        
    }else{
        let table2 = ["_","_","_","_"];
        console.log(table2);
        
    }

    
    
    
}

