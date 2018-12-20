const aiPlay = function (move, icon) {
  $(`#${move}`).addClass("aiPlayBoxShadow");
  $(`#${move}`).html(icon);
  setTimeout(function () {
    $(`#${move}`).removeClass("aiPlayBoxShadow");
  }, 300);
  tic.update(move, 2, tic.board);
  tic.check(tic.board, player2[1]);
  updateScore();
  endMessage();
  humanHasPlayed = false;
}

// Basic AI.................................
const basicAI = function (board = tic.board) {
  if(tic.gameInProgress) {
    const icon = $(player2[0]);
    let move;
    for (let i = 0; i < board.length; i++) {
      if (typeof board[i] !== "string") {
        move = i;
        break;
      }
    }
    aiPlay(move, icon);
    return;
  }
}
// Advanced AI.................................
const minimax = function (board, player) {
  const avaliableTiles = [];
  for (let i = 0; i < board.length; i++) {
    if (typeof board[i] !== "string") {
      avaliableTiles.push(i);
    }
  }

  if (tic.result(board, 1)) {
    return {score: -10};
  } else if (tic.result(board, 2)) {
    return {score: 10};
  } else if (tic.result(board, 1) === false) {
    return {score: 0};
  }

  let moves = [];
  for (let i = 0; i < avaliableTiles.length; i++) {
    let move = {};
    move.index = board[avaliableTiles[i]];
    board[avaliableTiles[i]] = player.toString();
    // console.log(board);

    if(player === 2) {
      let result = minimax(board, 1);
      move.score = result.score;
    } else if(player === 1){
      let result = minimax(board, 2);
      move.score = result.score;
    }

    board[avaliableTiles[i]] = move.index;
    moves.push(move);
  }

  let bestMove;
  if(player === 2) {
    let bestScore = -10000;
    for(let i = 0; i < moves.length; i++) {
      if(moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    let bestScore = 10000;
    for(let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }
  // console.log('returing', moves[bestMove], bestMove)
  return moves[bestMove];
}

const callMinimax = function () {
  if (tic.gameInProgress) {
    const icon = $(player2[0]);
    const move = minimax(tic.board, 2).index;
    aiPlay(move, icon);
    return;
  }
}
