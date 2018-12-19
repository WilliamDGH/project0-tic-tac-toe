// const ai = {
//   bestMove : function (board) {
//     for (let i = 0; i < board.length; i++) {
//       if (board[i] === 1 || board[i] === 2) {
//         delete board[i];
//       }
//     }
//
//   },
// }

function basicAI(board) {
  let availableMove = [];
  for (let i = 0; i < board.length; i++) {
    if (board[i] !== 1 && board[i] !== 2) {
      availableMove.push(i);
    }
  }
  const move = board[availableMove[0]];
  const icon = $(player[0]);
  $(`#${move}`).html(icon);
  const value = player[1];
  tic.update(move, value, tic.board);
  tic.check(tic.board, player[1]);
  updateScore();
  endMessage();
  if (player === player1) {
    player = player2;
  } else if (player === player2) {
    player = player1;
  }

  }
