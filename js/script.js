
document.addEventListener("DOMContentLoaded", function(event) {

//  code qui permet de faire que le jeu créé un conteneur pour le jeu.

class Jeu {

    constructor(idSvg, idPointage) {
       console.log("création du jeu") ;

       this.s = Snap(idSvg);

   this.sortiPointage = document.querySelector(idPointage);

   this.grandeurCarre = 20;

   this.grandeurGrille = 15;


    }

   nouvellePartie(){
   this.affichagePointage(1);
   this.Pomme = new Pomme();
 this.serpent = new Serpent();
    }
    finPartie(){




    }
    affichagePointage(lePointage){
    this.sortiPointage.innerHTML = lePointage;


    }


}

// code qui permet de faire que le jeu créé un objet qui fera office de serpent et augmente sa longueur si il avale
// une pomme.


    class Serpent {

        constructor() {
            console.log("création du serpent");

        }




    }


//code qui permet de faire que le jeu créé un objet pomme qui change de place à chaque fois que le serpent avale
// la précédente.


    class Pomme {

        constructor() {
            console.log("création de la pomme");

        }




    }


    var unePartie = new Jeu("#jeu", "#pointage");

    var btnJouer = document.querySelector("#btnJouer");
    btnJouer.addEventListener('click', nouvellePartie);

    function nouvellePartie(){

     unePartie.nouvellePartie();




    }
});