$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var animal = $("input:radio[name=animal]:checked").val();

    if (animal === "turtles") {
      $("#insects").hide();
      $("snakes").hide();
      $("#turtles").show();
    } else if (animal === "snakes") {
      $("#insects").hide();
      $("#turtles").hide();
      $("#snakes").show();
    } else {
      $("#turtles").hide();
      $("#snakes").hide();
      $("#insects").show();
    }
  });
});
