
const tic = {
  board: [10,20,30,
          40,50,60,
          70,80,90],
  winner: "",
  score: {
    player1Score: 0,
    drawScore: 0,
    player2Score: 0,
  },
  gameInProgress: true,
  result: function (board, player) {
    if (board[0] ===player && board[0] === board[1] && board[1] === board[2]) {
      return true;
    }
    if (board[3] ===player && board[3] === board[4] && board[4] === board[5]) {
      return true;
    }
    if (board[6] ===player && board[6] === board[7] && board[7] === board[8]) {
      return true;
    }
    if (board[0] ===player && board[0] === board[3] && board[3] === board[6]) {
      return true;
    }
    if (board[1] ===player && board[1] === board[4] && board[4] === board[7]) {
      return true;
    }
    if (board[2] ===player && board[2] === board[5] && board[5] === board[8]) {
      return true;
    }
    if (board[0] ===player && board[0] === board[4] && board[4] === board[8]) {
      return true;
    }
    if (board[2] ===player && board[2] === board[4] && board[4] === board[6]) {
      return true;
     }
    let playedTiles = 0;
    for (let i = 0; i < board.length; i++) {
      if (board[i].toString().length === 1) {
        playedTiles ++;
      }
    }
     if (playedTiles === 9) {
       return false;
     }
  },
  check: function (board, player) {
    if(this.result(board, player)) {
      this.gameInProgress = false;
      this.score[`player${player}Score`] ++;
      this.winner = `player${player}`;
    } else if (this.result(board, player) === false) {
      this.gameInProgress = false;
      this.score.drawScore ++;
      this.winner = "draw";
    }
  },
  update: function (tile, value, board) {
    board[tile] = value;
  },
}
