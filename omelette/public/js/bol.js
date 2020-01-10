
// mon boll

export class Bol {
    constructor(contenu) {
        this.contenu = [];
    }
    melanger(NomMelange) {
        let omelette = "";
        for (let i = 0; i < this.contenu.length; i++) {
            omelette += `
-> ${this.contenu[i].nom}`
        }
        console.log(`Melanger les ingredients:${omelette}`)
        this.contenu = NomMelange
    }
}
export class NewMelange {
    constructor(nomMelange, etat) {
        this.nomMelange = nomMelange
        this.etat = etat;
    }
}

// bol


