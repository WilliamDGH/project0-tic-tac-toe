const player1 = ['<i class="fas fa-cat fa-lg"></i>', 1];
const player2 = ['<i class="fas fa-dog fa-lg"></i>', 2];
let playingWithAdvancedAI = true;
let playingWithBasicAI = false;
let playingWithOtherPlayer = false;
const updateScore = function () {
  $("#player1-score").text(tic.score.player1Score);
  $("#draw-score").text(tic.score.drawScore);
  $("#player2-score").text(tic.score.player2Score);
}
const zeroSocre = function () {
  tic.score.player1Score = 0;
  tic.score.drawScore = 0;
  tic.score.player2Score = 0;
}

const resetBoard = function () {
  if (!tic.gameInProgress) {
    $("#game-board").toggle("slow");
    $("#message").toggle("slow");
  }
  $(".column").html("");
  tic.board = [0,1,2,3,4,5,6,7,8];
  tic.gameInProgress = true;
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
  // advanced AI play
  $(".column").on("click", function () {
    setTimeout(function () {
      if (playingWithAdvancedAI) {
        callMinimax(tic.board, 2);
      }
      if (playingWithBasicAI) {
        basicAI(tic.board);
      }
    }, 500);
    // human player move render
    if ($(this).html().length === 0 && tic.gameInProgress) {
      const icon = $(player[0]);
      $(this).html(icon);
      const tile = Number($(this).attr("id"));
      const value = player[1];
      tic.update(tile, value, tic.board);
      tic.check(tic.board, player[1]);
      updateScore();
      endMessage();
      // need to switch between players when PVP
      if (playingWithOtherPlayer) {
        if (player === player1) {
          player = player2;
        } else if (player === player2) {
          player = player1;
        }
      }
  }
  });

  // reset game borad ////////////////////////////////////////
  // restart the game
  $("#reset").on("click", function () {
    resetBoard();
  });

  // change to play with human
  $("#playWithPlayer").on("click", function () {
     playingWithAdvancedAI = false;
     playingWithBasicAI = false;
     playingWithOtherPlayer = true;
     $("#player1-label").text("Player 1: ");
     $("#player2-label").text("Player 2: ");
     zeroSocre();
     updateScore();
     resetBoard();
  })
  // change to play with basic ai
  $("#playWithBasicAI").on("click", function () {
     playingWithAdvancedAI = false;
     playingWithBasicAI = true;
     playingWithOtherPlayer = false;
     $("#player1-label").text("You: ");
     $("#player2-label").text("Basic AI: ");
     $("#playWithAdvancedAI").toggle();
     $("#playWithBasicAI").toggle();
     zeroSocre();
     updateScore();
     resetBoard();
  })
  // change to play with advanced ai
  $("#playWithAdvancedAI").on("click", function () {
     playingWithAdvancedAI = true;
     playingWithBasicAI = false;
     playingWithOtherPlayer = false;
     $("#player1-label").text("You: ");
     $("#player2-label").text("Crazy AI: ");
     $("#playWithAdvancedAI").toggle();
     $("#playWithBasicAI").toggle();
     zeroSocre();
     updateScore();
     resetBoard();
  })
});
