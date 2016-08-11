$(function(){
  $("form").submit(function(event){
  event.preventDefault();
  var side1 = parseInt($("#side1").val());
  var side2 = parseInt($("#side2").val());
  var side3 = parseInt($("#side3").val());

  if (side3 >= side1 + side2 || side1 >= side2 + side3 || side2 >= side1 + side3) {
    $("#result").text("Not a Triangle!");
  } else if (side1 === side2 && side1 === side3) {
    $("#result").text("Equilateral!");
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    $("#result").text("Isosceles!");
  } else if (side1 != side2 && side1 != side3 && side2 != side3) {
    $("#result").text("Scalene!");
  }
  });
});
