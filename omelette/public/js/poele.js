export class Poele{
    constructor(contenu){
        this.contenu = contenu;
    }
    cuir() {
        setTimeout(() => {
            this.contenu.etat = "cuite"
            this.contenu.nomMelange = 'omelette'
            console.log(`L'${this.contenu.nomMelange} est ${this.contenu.etat}`)
        }, 4000)
    }
}


// je pense avoir tricher a la ligne 9