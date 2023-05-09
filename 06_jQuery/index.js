$("h1").on("mouseover", function () {
  $("h1").css("color", "purple");
});

$("button").on("click", function () {
  $("h1").toggle();
});
