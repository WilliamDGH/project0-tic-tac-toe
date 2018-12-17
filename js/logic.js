// 11 12 13
// 21 22 23
// 31 32 33
// 11 21 31
// 12 22 32
// 13 23 33
// 11 22 33
// 13 22 31

const tic = {
  board: {
    11: 10,
    12: 20,
    13: 30,
    21: 40,
    22: 50,
    23: 60,
    31: 70,
    32: 80,
    33: 90,
  },
  score: {
    player1Score: 0,
    drawScore: 0,
    player2Score: 0,
  },
  gameInProgress: true,
  result: function () {
    let playedTiles = 0;
    for (let key in this.board) {
      if (this.board[key].toString().length === 1) {
        playedTiles ++;
      }
    }
    if (playedTiles === 9) {
      this.gameInProgress = false;
      this.score.drawScore ++;
    }
    if (this.board["11"] === this.board["12"] && this.board["12"] === this.board["13"]) {
      const winnerID = this.board["11"];
      this.gameInProgress = false;
      if (winnerID === 1) {
        this.score.player1Score ++;
      } else if (winnerID === 2) {
        this.score.player2Score ++;
      }
    }
    if (this.board["21"] === this.board["22"] && this.board["22"] === this.board["23"]) {
      const winnerID = this.board["21"];
      this.gameInProgress = false;
      if (winnerID === 1) {
        this.score.player1Score ++;
      } else if (winnerID === 2) {
        this.score.player2Score ++;
      }
    }
    if (this.board["31"] === this.board["32"] && this.board["32"] === this.board["33"]) {
      const winnerID = this.board["31"];
      this.gameInProgress = false;
      if (winnerID === 1) {
        this.score.player1Score ++;
      } else if (winnerID === 2) {
        this.score.player2Score ++;
      }
    }
    if (this.board["11"] === this.board["21"] && this.board["21"] === this.board["31"]) {
      const winnerID = this.board["11"];
      this.gameInProgress = false;
      if (winnerID === 1) {
        this.score.player1Score ++;
      } else if (winnerID === 2) {
        this.score.player2Score ++;
      }
    }
    if (this.board["12"] === this.board["22"] && this.board["22"] === this.board["32"]) {
      const winnerID = this.board["12"];
      this.gameInProgress = false;
      if (winnerID === 1) {
        this.score.player1Score ++;
      } else if (winnerID === 2) {
        this.score.player2Score ++;
      }
    }
    if (this.board["13"] === this.board["23"] && this.board["23"] === this.board["33"]) {
      const winnerID = this.board["13"];
      this.gameInProgress = false;
      if (winnerID === 1) {
        this.score.player1Score ++;
      } else if (winnerID === 2) {
        this.score.player2Score ++;
      }
    }
    if (this.board["11"] === this.board["22"] && this.board["22"] === this.board["33"]) {
      const winnerID = this.board["11"];
      this.gameInProgress = false;
      if (winnerID === 1) {
        this.score.player1Score ++;
      } else if (winnerID === 2) {
        this.score.player2Score ++;
      }
    }
    if (this.board["13"] === this.board["22"] && this.board["22"] === this.board["31"]) {
      const winnerID = this.board["13"];
      this.gameInProgress = false;
      if (winnerID === 1) {
        this.score.player1Score ++;
      } else if (winnerID === 2) {
        this.score.player2Score ++;
      }
     }
  },
  update: function (tile, value) {
    this.board[tile] = value;
  },
  gameOver: function () {
    let playedTiles = 0;
    for (let key in this.board) {
      if (this.board[key].toString().length === 1) {
        playedTiles ++;
      }
    }
    if (playedTiles === 9) {
      return "GAME OVER";
    }
  },
}
