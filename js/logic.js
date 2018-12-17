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
  result: function () {
    if (this.board["11"] === this.board["12"] && this.board["12"] === this.board["13"]) {
      return this.board["11"] + "wins";
    }
    if (this.board["21"] === this.board["22"] && this.board["22"] === this.board["23"]) {
      return this.board["21"] + "wins";
    }
    if (this.board["31"] === this.board["32"] && this.board["32"] === this.board["33"]) {
      return this.board["31"] + "wins";
    }
    if (this.board["11"] === this.board["21"] && this.board["21"] === this.board["31"]) {
      return this.board["11"] + "wins";
    }
    if (this.board["12"] === this.board["22"] && this.board["22"] === this.board["32"]) {
      return this.board["12"] + "wins";
    }
    if (this.board["13"] === this.board["23"] && this.board["23"] === this.board["33"]) {
      return this.board["13"] + "wins";
    }
    if (this.board["11"] === this.board["22"] && this.board["22"] === this.board["33"]) {
      return this.board["11"] + "wins";
    }
    if (this.board["13"] === this.board["22"] && this.board["22"] === this.board["31"]) {
    return this.board["13"] + "wins";
     }
  },
  update: function (spot, value) {
    this.board[spot] = value;
    return this.result();
  },
}
