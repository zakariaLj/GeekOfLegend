export class Personne {
    constructor(nom, lieu, argent, mainDroite, mainGauche, personnes){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = [];
        this.mainGauche = [];
     
    }
    seDeplacer(lieu){
        console.log(this.nom +  " est actuellement a la " +lieu);
    }

    payerArticle(article) {
        console.log(`Le ${article.nom}  :  ${article.prix} euros`)
        if (article.prix > 0) {

           let somme = this.argent -article.prix
            
        }
        else {
            console.log(`Vous n'avez pas d'argent pour payer ${article.nom}`)
        }
    }

    couper(ingredient/*, outil*/) {
        switch (ingredient.nom) {
            case "frommage":
                console.log(`L'etat de ${ingredient.nom} est en ${ingredient.etats}`)
                console.log(`Couper ${ingredient.nom}`)
                ingredient.etats = "petits morceaux"
                console.log(`L'etat de ${ingredient.nom} est ${ingredient.etats}`)
                console.log(`Vercer le ${ingredient.nom} en ${ingredient.etats} dans le bol`)
                break
            case "epices":
                console.log(`L'etat de ${ingredient.nom} est ${ingredient.etats}`)
                console.log(`Vercer le ${ingredient.nom} en ${ingredient.etats} dans le bol`)
                break
            case "oeuf":
                console.log(`L'etat de ${ingredient.nom} est en ${ingredient.etats}`)
                console.log(`Casser ${ingredient.nom} dans le bol`)
                ingredient.etats = "cassé"
                console.log(`L'etat de ${ingredient.nom} est ${ingredient.etats}`)
                console.log(`Vercer le ${ingredient.nom} ${ingredient.etats} dans le bol`)
                break
            case "ouil":
                console.log(`L'etat de ${ingredient.nom} est ${ingredient.etats}`)
                console.log(`Vercer le ${ingredient.nom} en ${ingredient.etats} dans le bol`)
                break
        }
    }

    prendreUnPanier(name){
        console.log( this.nom + " a pris le panier" );

        
    }
}

