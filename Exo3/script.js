// Déterminer un nombre au hasard entre 0 et 100
var minNumber = 1; // le minimum
var maxNumber = 100; // le maximum
var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // la fonction magique
console.log(randomnumber)
var counterClic = 0;
console.log(counterClic);

// Rechercher le nombre :
$("#button").click(function() {
  if ($("#number").val() > randomnumber) {
    alert("Moins");
    ++counterClic;
  } if ($("#number").val() < randomnumber) {
    alert("Plus");
    ++counterClic;
  } if ($("#number").val() == randomnumber) {
    alert("Bravo! Vous avez trouvé la bonne réponse en " + ++counterClic + " clics");
  }
});
