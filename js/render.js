const player1 = ['<i class="fas fa-cat fa-lg"></i>', 1];
const player2 = ['<i class="fas fa-dog fa-lg"></i>', 2];
const updateScore = function () {
  $("#player1-score").text(tic.score.player1Score);
  $("#draw-score").text(tic.score.drawScore);
  $("#player2-score").text(tic.score.player2Score);
}
const endMessage = function () {
  if (!tic.gameInProgress) {
    if (tic.winner === "player1") {
      $("#winner-message").text(`The winner is player 1.`);
    } else if (tic.winner === "draw") {
      $("#winner-message").text(`It is a draw.`);
    } else if (tic.winner === "player2") {
      $("#winner-message").text(`The winner is player 2.`);
    }
    $("#game-board").delay(1000).toggle(1000);
    $("#message").delay(1000).toggle(1000);
  }
}


$(document).ready(function () {
  updateScore();
  // play///////////////////////////////////////////////////
  let player = player1;
  $(".column").on("click", function () {
    if ($(this).html().length === 0 && tic.gameInProgress) {
      const icon = $(player[0]);
      $(this).html(icon);
      const tile = $(this).attr("id");
      const value = player[1];
      tic.update(tile, value);
      tic.result();
      updateScore();
      endMessage();
      if (player === player1) {
        player = player2;
      } else if (player === player2) {
        player = player1;
      }
  }
  });

  // reset game borad ////////////////////////////////////////
  $("#reset").on("click", function () {
    if (!tic.gameInProgress) {
      $("#game-board").toggle("slow");
      $("#message").toggle("slow");
    }
    $(".column").html("");
    tic.board = {11: 10, 12: 20, 13: 30, 21: 40, 22: 50, 23: 60, 31: 70, 32: 80, 33: 90};
    tic.gameInProgress = true;
  });
});
