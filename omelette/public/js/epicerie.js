export class Epicerie{
    constructor(nom,personnes, panier, contenuePanier, ingredient){
        this.nom = nom;
        this.personnes = [];
        this.panier = panier;
        this.contenuePanier = [];
        this.ingredient = ingredient;   
    }

  donnerUnpanier(nom){
      for (let i = 0; i < this.panier.length; i++) {
          let firstpanier = this.panier.shift();
          console.log(firstpanier + " a  "+ nom);
          
          
      }

  }
  
}
