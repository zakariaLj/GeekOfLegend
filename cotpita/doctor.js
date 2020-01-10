

export class Doctor {
    constructor(name, cabinet, prixConsultation, ) {
        this.name = name;
        this.cabinet = [];


    }

    callPatient(cabinet) {

            console.log(this.name + " appel " + cabinet.name);


    }
    diagnostique(patient) {
        console.log(patient.name + " vous avez une " + patient.disis + " vous devez predre le traitement suivant ");

    }

    bringOut(patient) {
        console.log(this.name + " fait sortir " + patient.name);

    }

}
