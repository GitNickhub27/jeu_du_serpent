
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


       this.finPartie();
   this.affichagePointage(1);
   this.pomme = new Pomme(this);
 this.serpent = new Serpent(this);
    }
    finPartie(){
        if(this.pomme !== undefined){
            this.pomme.supprimePomme();
            this.pomme = undefined;
        }




    }
    affichagePointage(lePointage){
    this.sortiPointage.innerHTML = lePointage;


    }


}

// code qui permet de faire que le jeu créé un objet qui fera office de serpent et augmente sa longueur si il avale
// une pomme.


    class Serpent {

        constructor(jeuSerpent) {
            console.log("création du serpent");
           this.jeuSerpent = jeuSerpent;
        }



    verifTouche(evt){




    }

    deplacement(dirCode){





    }
    controleSerpent(){


    }

    dessineCarre(x,y){



    }
    supprimeSerpent(){



    }


    }


//code qui permet de faire que le jeu créé un objet pomme qui change de place à chaque fois que le serpent avale
// la précédente.


    class Pomme{

        constructor(lejeu) {
            console.log("création de la pomme");
        this.lejeu = lejeu;
        this.pomme = [];
        this.ajoutePomme();
        }

        ajoutePomme(){
        var posX = Math.floor(Math.random() * this.lejeu.grandeurGrille);
            var posY = Math.floor(Math.random() * this.lejeu.grandeurGrille);

          this.pomme = [this.lejeu.s.rect(posX * this.lejeu.grandeurCarre, posY * this.lejeu.grandeurCarre, this.lejeu.grandeurCarre, this.lejeu.grandeurCarre).attr({fill:"red"}), posX,posY];

        }
        supprimePomme(){
         this.pomme[0].remove();


        }

    }

// Code permettant de créér une nouvelle partie et d'appeler la fonction nouvellePartie() qui commence la nouvelle
// partie.
    var unePartie = new Jeu("#jeu", "#pointage");

    var btnJouer = document.querySelector("#btnJouer");
    btnJouer.addEventListener('click', nouvellePartie);

    function nouvellePartie(){

     unePartie.nouvellePartie();




    }
});