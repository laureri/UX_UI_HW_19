console.log("Your index.js file is loaded correctly!");
$(document).ready(function () {
  $("#p1").click(function () {
    alert("You entered p1!");
  });

  $("img.skillsPic").hover(
    function () {
      $(this).fadeTo(500, 0.3);
    },
    function () {
      $(this).fadeTo(500, 1);
    }
  );
});
