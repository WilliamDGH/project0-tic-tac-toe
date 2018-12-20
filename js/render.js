// start of game variables
let player1 = ['<i class="fas fa-cat fa-lg"></i>', 1];
let player2 = ['<i class="fas fa-dog fa-lg"></i>', 2];
let player = player1;
let playingWithAdvancedAI = true;
let playingWithBasicAI = false;
let playingWithOtherPlayer = false;
let humanHasPlayed = false;

// toggle menu function
const toggleMenu = function() {
  if ($("#gameManu").css("width") === "0px") {
    $("#gameManu").css("width", "100%");
  } else {
    $("#gameManu").css("width", "0px");
  }
}

// update scores in the backgorund
const updateScore = function () {
  $("#player1-score").text(tic.score.player1Score);
  $("#draw-score").text(tic.score.drawScore);
  $("#player2-score").text(tic.score.player2Score);
}

// reset the scores to zero
const zeroSocre = function () {
  tic.score.player1Score = 0;
  tic.score.drawScore = 0;
  tic.score.player2Score = 0;
}

// reset the game info in the background
const resetBoard = function () {
  $("#message").css("width", "0px");
  $(".column").html("");
  tic.board = [0,1,2,3,4,5,6,7,8];
  tic.gameInProgress = true;
}

// show end of game messages
const endMessage = function () {
  if (!tic.gameInProgress) {
    if (tic.winner === "player1") {
      $("#winner-message").text(`The winner is ${$("#player1-label").text()}.`);
    } else if (tic.winner === "draw") {
      $("#winner-message").text(`It is a draw.`);
    } else if (tic.winner === "player2") {
      $("#winner-message").text(`The winner is ${$("#player2-label").text()}.`);
    }
    setTimeout(function () {
      $("#message").css("width", "100%");
    }, 1000);
  }
}


// MAIN RENDER FUNCTION EVENT LISTENER
$(document).ready(function () {
  updateScore();
  // play///////////////////////////////////////////////////
  // AI play
  $(".column").on("click", function () {
    setTimeout(function () {
      if (playingWithAdvancedAI && humanHasPlayed) {
        callMinimax(tic.board, 2);
      }
      if (playingWithBasicAI && humanHasPlayed) {
        basicAI(tic.board);
      }
    }, 500);
    // human player move render
    if ($(this).html().length === 0 && tic.gameInProgress && !humanHasPlayed) {
      const icon = $(player[0]);
      $(this).html(icon);
      const tile = Number($(this).attr("id"));
      const value = player[1];
      tic.update(tile, value, tic.board);
      tic.check(tic.board, player[1]);
      updateScore();
      endMessage();
      if (playingWithBasicAI || playingWithAdvancedAI) {
        humanHasPlayed = true;
      }
      // need to switch between players when PVP
      if (playingWithOtherPlayer && tic.gameInProgress) {
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
  $(".reset").on("click", function () {
    resetBoard();
  });

  // change to play with human
  $("#playWithPlayer").on("click", function () {
     playingWithAdvancedAI = false;
     playingWithBasicAI = false;
     playingWithOtherPlayer = true;
     $("#player1-label").text("Player 1");
     $("#player2-label").text("Player 2");
     zeroSocre();
     updateScore();
     resetBoard();
     toggleMenu();
  })
  // change to play with basic ai
  $("#playWithBasicAI").on("click", function () {
     playingWithAdvancedAI = false;
     playingWithBasicAI = true;
     playingWithOtherPlayer = false;
     $("#player1-label").text("You");
     $("#player2-label").text("Basic AI");
     zeroSocre();
     updateScore();
     resetBoard();
     toggleMenu();
  })
  // change to play with advanced ai
  $("#playWithAdvancedAI").on("click", function () {
     playingWithAdvancedAI = true;
     playingWithBasicAI = false;
     playingWithOtherPlayer = false;
     $("#player1-label").text("You");
     $("#player2-label").text("Crazy AI");
     zeroSocre();
     updateScore();
     resetBoard();
     toggleMenu();
  })

  // toggle fullscreen menu
  $("#open").on("click", function () {
    toggleMenu();
  })
  $("#closebtn").on("click", function () {
    toggleMenu();
  })
  // change tokens
  $("#rfc-bfc").on("click", function () {
    player1 = ['<img src="pic/real-madrid.svg" alt="real madrid">', 1];
    player2 = ['<img src="pic/barcelona.svg" alt="barcelona">', 2];
    player = player1;
    resetBoard();
    toggleMenu();
  })

  $("#apple-google").on("click", function () {
    player1 = ['<img src="pic/apple.png" alt="apple">', 1];
    player2 = ['<img src="pic/google.png" alt="google">', 2];
    player = player1;
    resetBoard();
    toggleMenu();
  })

  $("#mac-windows").on("click", function () {
    player1 = ['<img src="pic/windows.png" alt="windows">', 1];
    player2 = ['<img src="pic/mac.png" alt="mac">', 2];
    player = player1;
    resetBoard();
    toggleMenu();
  })
});
