
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
   this.Unepomme = new pomme(this);
 this.serpent = new Serpent(this);
    }

    finPartie(){
        if(this.Unepomme !== undefined){
            this.Unepomme.supprimePomme();
            this.Unepomme = undefined;
        }

if(this.serpent !== undefined){
    this.serpent.supprimeSerpent();
    this.serpent = undefined;

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

           this.currentX = -1;

           this.currentY = 0;

           this.prochainMovX = 1;

           this.prochainMovY = 0;

           this.serpentLongueur = 1;

           this.tblCarreSerpent = [];

           this.touche = false;

           this.vitesse = 250;
           this.timing= setInterval(this.controleSerpent.bind(this), this.vitesse);
           document.addEventListener("keydown",this.verifTouche.bind(this));
        }



    verifTouche(evt){

    var evt = evt;

  console.log(evt.keyCode);
  this.deplacement(evt.keyCode);
    }

    deplacement(dirCode){

      switch (dirCode){

          case 37:
              this.prochainMovX = -1;
              this.prochainMovY = 0;
              break;

              case 38:
              this.prochainMovX = 0;
              this.prochainMovY = -1;
              break;

          case 39:
              this.prochainMovX = 1;
              this.prochainMovY = 0;
              break;
          case 40:
              this.prochainMovX = 0;
              this.prochainMovY = 1;
              break;
      }

//console.log(this.prochainMovX, this.prochainMovY);



    }
    controleSerpent(){
    var nextX = this.currentX + this.prochainMovX;
    var nextY =this.currentY + this.prochainMovY;

    this.tblCarreSerpent.forEach(function (element){
        if(nextX === element[1] && nextY === element[2]){
        console.log('touche moi-même')
        this.jeuSerpent.finPartie();


        this.touche = true;
        }



        }.bind(this))

    if(nextY < 0 || nextX < 0 || nextY > this.jeuSerpent.grandeurGrille-1|| nextX > this.jeuSerpent.grandeurGrille-1){
    console.log("Touche limites");
    this.jeuSerpent.finPartie();
     this.touche = true;
    }
    if(!this.touche)
       if(this.currentX === this.jeuSerpent.Unepomme.grossePomme[1] && this.currentY === this.jeuSerpent.Unepomme.grossePomme[2]){
          this.serpentLongueur++;
          this.jeuSerpent.affichagePointage(this.serpentLongueur);
          this.jeuSerpent.Unepomme.supprimePomme();
          this.jeuSerpent.Unepomme.ajoutePomme();
       }
    this.dessineCarre(nextX,nextY);
    this.currentX = nextX;
    this.currentY = nextY;
    }

    dessineCarre(x,y){

 var unCarre = [this.jeuSerpent.s.rect(x * this.jeuSerpent.grandeurCarre, y * this.jeuSerpent.grandeurCarre, this.jeuSerpent.grandeurCarre,this.jeuSerpent.grandeurCarre).attr({fill:"darkgreen"}), x, y];

 this.tblCarreSerpent.push(unCarre);

    if(this.tblCarreSerpent.length > this.serpentLongueur){

    this.tblCarreSerpent[0][0].remove();
    this.tblCarreSerpent.shift();


    }
    }
    supprimeSerpent(){
    clearInterval(this.timing);

    while(this.tblCarreSerpent.length > 0){
     this.tblCarreSerpent[0][0].remove();
     this.tblCarreSerpent.shift();
     this.serpentLongueur = 0;
    }
    }





    }


//code qui permet de faire que le jeu créé un objet pomme qui change de place à chaque fois que le serpent avale
// la précédente.


    class pomme{

        constructor(lejeu) {
            console.log("création de la pomme");
        this.lejeu = lejeu;
        this.grossePomme = [];
        this.ajoutePomme();
        }

        ajoutePomme(){
        var posX = Math.floor(Math.random() * this.lejeu.grandeurGrille);
            var posY = Math.floor(Math.random() * this.lejeu.grandeurGrille);

          this.grossePomme = [this.lejeu.s.rect(posX * this.lejeu.grandeurCarre, posY * this.lejeu.grandeurCarre, this.lejeu.grandeurCarre, this.lejeu.grandeurCarre).attr({fill:"red"}), posX,posY];

        }
        supprimePomme(){
         this.grossePomme[0].remove();


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