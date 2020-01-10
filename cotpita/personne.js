export class Personne {
    constructor(name, health, money, pocket, disis) {
        this.name = name;
        this.health = health;
        this.money = money;
        this.pocket = pocket;
        this.disis = disis;

    }
    goTo() {


    }
    takeCare() {

    }
    paye(patient) {
        let prixConsultation = 50;
        if (patient.money >= prixConsultation) {
            console.log(patient.name + " posséde " + patient.money)
            console.log("la consultation  lui coutera 50 euros " + (patient.money -= prixConsultation));
        } else {
            console.log(" Vous n'avez plus d'argent je suis désolé " + this.name);

        }
    }
    payFarm(patient) {
        let traitement;
        // faire un switchw
        switch (patient.disis) {

            case "mal-indente":
                traitement = "ctrl+maj+f";
                console.log(traitement);
                console.log("--------------------- " + patient.name + " va a la pharmacie --------------------");
                console.log('bonjour il me faut le traitement suivant :' + traitement);
                console.log(" le prix de ce traitement est de 60euros");
                if (patient.money >= 60) {
                    console.log("voici le traitement vous etes sauvé");
                } else {
                    console.log('je suis désoler vous ,vous etes pauvre:  vous allez mourir');

                }
                break;
            case "unsave":
                traitement = "saveOnFocusChange";
                console.log(traitement);
                console.log("--------------------- " + patient.name + " va a la pharmacie --------------------");
                console.log('bonjour il me faut le traitement suivant :' + traitement);
                console.log(" le prix de ce traitement est de 100euros");
                if (patient.money >= 100) {
                    console.log("voici le traitement vous etes sauvé");
                } else {
                    console.log('je suis désoler vous ,vous etes pauvre:  vous allez mourir');

                }
                break;
            case "404":
                traitement = "CheckLinkRelation";
                console.log(traitement);
                console.log("--------------------- " + patient.name + " va a la pharmacie --------------------");
                console.log('bonjour il me faut le traitement suivant :' + traitement);
                console.log(" le prix de ce traitement est de 35 euros");
                if (patient.money >= 35) {
                    console.log("voici le traitement vous etes sauvé");
                } else {
                    console.log('je suis désoler vous ,vous etes pauvre:  vous allez mourir');

                }
                break;
            case "azmatique":
                traitement = "Ventoline";
                console.log(traitement);
                console.log("--------------------- " + patient.name + " va a la pharmacie --------------------");
                console.log('bonjour il me faut le traitement suivant :' + traitement);
                console.log(" le prix de ce traitement est de 40euros");
                if (patient.money >= 40) {
                    console.log("voici le traitement vous etes sauvé");
                } else {
                    console.log('je suis désoler vous ,vous etes pauvre:  vous allez mourir');

                }
                break;
            case "syntaxError":
                traitement = "f12+doc";
                console.log(traitement);
                console.log("--------------------- " + patient.name + " va a la pharmacie --------------------");
                console.log('bonjour il me faut le traitement suivant :' + traitement);
                console.log(" le prix de ce traitement est de 20euros");
                if (patient.money >= 20) {
                    console.log("voici le traitement vous etes sauvé");
                } else {
                    console.log('je suis désoler vous ,vous etes pauvre:  vous allez mourir');

                }
                break;

        }

    }

}



