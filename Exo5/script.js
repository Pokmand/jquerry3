$(function() {
  // console.log("X =" + positionX);
  // console.log("Y =" + positionY);
  var widthmax = $(window).width();
  var heightmax = $(window).height();
  // console.log("widthmax =" + widthmax);
  // console.log("heightmax =" + heightmax);

  //fonctions de déplacement :
  $('#textref').keydown(function(move) {
    // coordonnées Carré dans écran et taille de l'écran :
    var positionX = $('#square').offset().left;
    var positionY = $('#square').offset().top;
    switch (move.keyCode) {
      case 37: // fleche gauche
        if (positionX <= 0) {
          $('#square').css('margin-left', widthmax - 50);
        } else {
          $('#square').css('margin-left', '-=10px');
        }
        break;

      case 38: // fleche haut
        if (positionY <= 0) {
          $('#square').css('margin-top', heightmax - 50);
        } else {
          $('#square').css('margin-top', '-=10px');
        }
        break;

      case 39: // fleche droite
        if (positionX >= (widthmax - 50)) {
          $('#square').css('margin-left', '0');
        } else {
          $('#square').css('margin-left', '+=10px');
        }
        break;

      case 40: // fleche bas
        if (positionY >= (heightmax - 50)) {
          $('#square').css('margin-top', '0');
        } else {
          $('#square').css('margin-top', '+=10px');
        }
        break;
      default:
        alert('Veuillez utiliser les flèches');
    }
  });
})
