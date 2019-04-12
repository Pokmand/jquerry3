var counterClic = 0;
$("#addButton").click(function() {
  counterClic++;
  $("#number").val(counterClic);
})
$("#lessButton").click(function() {
  counterClic--;
  $("#number").val(counterClic);
})
