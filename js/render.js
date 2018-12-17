$(document).ready(function () {
  let playerID = "1";
  $(".column").on("click", function () {
    if ($(this).text().length === 0) {
      $(this).text(playerID);
      if (playerID === "1") {
        playerID = "2";
      } else if (playerID === "2") {
        playerID = "1";
      }
  }
  });
});
