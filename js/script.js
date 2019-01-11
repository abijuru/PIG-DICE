// Business Logic

var Player = function(turn) {
    this.scoreTotal = 0;
    this.currentScore = 0;
    this.turn = turn;
  };
  Player.prototype.takeTurn = function() {
    if (this.turn === true) {
      this.turn = false;
    }
    else {
      this.turn = true;
    }
  };

  Player.prototype.roll = function() {
    var rand = Math.floor(Math.random() * 6) + 1;
    this.currentScore = rand;
  };
  
  Player.prototype.turnTotal = function(rollPoints) {
    this.currentScore += rollPoints
  }
  
  Player.prototype.addPoints = function(rollPoints) {
    this.scoreTotal += rollPoints;
  };


