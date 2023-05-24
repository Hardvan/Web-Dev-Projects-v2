$("h1").on("mouseover", function () {
  $("h1").css("color", "purple");
});

$("h1").on("mouseleave", function () {
  $("h1").css("color", "yellow");
});

$("button").on("click", function () {
  $("h1").toggle();
});
