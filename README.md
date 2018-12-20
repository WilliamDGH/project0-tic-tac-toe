# Project 0

## Tic Tac Toe


### Table of Content

1. [Overview](#)
1. [HTML Elements]()
1. [CSS Style]()
1. [JavaScript Render]()
1. [JavaScript Logic](#)
1. [Advanced AI and minimax Algorithm]()
1. [Used Resource & Credit]()

#### Overview
This is a simple Tic Tac Toe game. Where you can play against other players, or you can choose to play against AI.

There are two AI difficulties: Basic AI and Unbeatable AI.

It also supports choosing your game tokens from 4 presets including the default ones.

#### HTML Elements
The main game board was created using 3 layers of `<div>` tags. The first layer is `<div id="game-board">`. In which, there are three `<div class="row">` inside the main game board. In each row, there are three `<div class="columns">`. Therefore, 9 columns in total create the basic game board.

The game scores are also displayed on the top section of the screen.

In addition, there is a overlay element hidden when the game starts. User can access this element by click on the menu button on the right side of the top of the screen. In the overlay element, user can custom the game by selecting from three playing options: PVP, basic AI, and Unbeatable AI. Furthermore, user can choose from three presets of game tokens to custom their game.

#### CSS Style
The most important parts of the CSS of this project is the hidden overlay element and mobile friendly responsive design.

The CSS works together with JavaScript. When the menu button gets clicked, the JavaScript tells the CSS to set the overlay's width from 0 to 100%. Therefore, it shows up from hidden to fullscreen menu.

In this project, there are two `@media` query in addition to the default screen size. It not only supports desktop size, but also supports tablet and mobile phone size screens.

#### JavaScript Render
As this project is a dynamic game, the elements needs to be changing according to the user's actions.

This part of the JavaScript uses multiple event listener to detect the user's actions, and changes the elements on the screen accordingly.

The render is separated from the logic part of JavaScript.

#### JavaScript Logic
In the logic part of JavaScript, the game board is stored as an array `gameBoard = [0,1,2,3,4,5,6,7,8];`.

Everytime a user makes a move, the array gets changed to reflect the move. Once the JavaScript logic detect a winning condition, it will output that to the render part of the JavaScript. And then the user can see the result on screen.

#### Advanced AI and minimax Algorithm
This is the most advanced part of this project.

According to [Wikipedia](https://en.wikipedia.org/wiki/Minimax)

 `Minimax (sometimes MinMax or MM[1]) is a decision rule used in artificial intelligence, decision theory, game theory, statistics and philosophy for minimizing the possible loss for a worst case (maximum loss) scenario. When dealing with gains, it is referred to as "maximin"—to maximize the minimum gain. Originally formulated for two-player zero-sum game theory, covering both the cases where players take alternate moves and those where they make simultaneous moves, it has also been extended to more complex games and to general decision-making in the presence of uncertainty.`

 Because the game of Tic Tac Toe is a zero sum game. It means when one player earns points, the other player loses points. The total points always added up to zero. Therefore, the minimax algorithm is perfect for design of AI player in this game.

#### Used Resource & Credit
In doing this project, I got inspiration and resources from the following:

* [How to make your Tic Tac Toe game unbeatable by using the minimax algorithm](https://medium.freecodecamp.org/how-to-make-your-tic-tac-toe-game-unbeatable-by-using-the-minimax-algorithm-9d690bad4b37)
* [Building an AI algorithm for the Tic-Tac-Toe challenge](https://medium.freecodecamp.org/building-an-ai-algorithm-for-the-tic-tac-toe-challenge-29d4d5adee07)
* [JavaScript Tic Tac Toe Project Tutorial - Unbeatable AI w/ Minimax Algorithm](https://www.youtube.com/watch?v=P2TcQ3h0ipQ&t=2614s)
* [Recursion](https://www.youtube.com/watch?v=VrrnjYgDBEk)
* [How TO - Full screen Overlay Navigation](https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp)
* And last but not least, thanks [wofockham](https://github.com/wofockham) for helping me debuging the minimax algorithm.
