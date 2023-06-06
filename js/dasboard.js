$("#btnToggle").on("click", function () {
  $("#myNavbar").addClass("my-navbar-off");
  $(this).addClass("d-none");
  $("#btnToggleOn").removeClass("d-none");
});

$("#btnToggleOn").on("click", function () {
  $("#myNavbar").removeClass("my-navbar-off");
  $(this).addClass("d-none");
  $("#btnToggle").removeClass("d-none");
});

$("#btnToggleOnMobile").on("click", function () {
  $("#myNavbar").removeClass("navbar-respons");
  $(this).addClass("d-none");
  $("#btnToggleMobile").removeClass("d-none");
});

$("#btnToggleMobile").on("click", function () {
  $("#myNavbar").addClass("navbar-respons");
  $(this).addClass("d-none");
  $("#btnToggleOnMobile").removeClass("d-none");
});
