var hoblong = $(".rectangle").height();
console.log(hoblong);
$("#button1").click(function() {
  $(".rectangle").height("+=10px");
  if ($(".rectangle").height() > 100) {
    $(".rectangle").height("10px");
  }
})
// Bouton 2 : met le rectangle en vert
$("#button2").click(function() {
  $(".rectangle").css("border-color", "green");
})
// Bouton 3 : remet les couleurs initiales
$("#button3").click(function() {
  $(".rectangle").css("border-color", "inherit");
})
// Bouton 4 : fait disparaître le rectangle
$("#button4").click(function() {
  $(".rectangle").css("display", "none");
})
// Bouton 5 : fait réaparaître le rectangle
$("#button5").click(function() {
  $(".rectangle").css("display", "block");
})
