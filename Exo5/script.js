$(function() {
  // coordonnées Carré dans écran :
  var X = $('#square').offset().left;
  var Y = $('#square').offset().top;
  console.log(X);
  console.log(Y);
  //fonctions de déplacement avec tests si bords atteints :
  $('#textref').keydown(function(move) {
    switch (move.which) {
      case 37: // fleche gauche
        //$('#square').offset('left', 100);
        $('#square').css('margin-left', '-=10px');
        console.log($('#square').offset().left);
        break;
      case 38: // fleche haut
        //$('#square').offset(Y, '-=10');
        $('#square').css('margin-top','-=10px');
        console.log('haut');
        break;
      case 39: // fleche droite
        //$('#square').offset(X, '+=10');
        $('#square').css('margin-left','+=10px')
        console.log('droite');
        break;
      case 40: // fleche bas
        //$('#square').offset(Y, '+=10');
        $('#square').css('margin-top','+=10px')
        console.log('bas');
        break;
      default:
        alert('Veuillez utiliser les flèches');
    }
  });
})
