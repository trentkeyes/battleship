# Battleship

---

[Live app](https://trentkeyes.github.io/battleship/)

Inpsired by the [the Odin Project curriculum](https://www.theodinproject.com/lessons/node-path-javascript-battleship) and the classic board game. Created with HTML, CSS and Javascript.

User can drag and drop their ships to begin the game and play against a randomly created computer board. 

### Features

- Rotate, drag and drop ships to place them at the beginning of the game.
- Randomly placed ships for computer player.
- Computer player uses "smart targeting" (after randomly achieving a hit, subsequent shots will be fired around the successful hit, focusing on one axis after two successful shots on the same ship until the ship is sunk).

### Features to add

- Responsiveness for smaller screens (currently only works on medium-large screens).
- Allow for a two human player mobile game (as described as "extra credit" on the project assignment page).
- Improve visual design of ships
- Make "smart targeting" even smarter (for example, if only the five length ship is remaining, computer wouldn't shoot in a place where this ship couldn't possibly fit).

### I learned about

- Basics of TDD (test-driven development) using Jest.
- Using the Drag-and-drop API. I think in most situations, you would drag and drop something smaller into a larger container, which is relatively simple to achieve with the API. However, in this case I wanted the user to be able to drag any part of the ship to an target square. Therefore, I had to identify which part of the ship was being dragged, and fill in the adjacent areas of the target square appropriately, accounting for ship size and orientation, and not allowing placement that would intersect with other ships or "spill over" the edges of the board.
- Creating "intelligent" computer placement and moves
- Using "Set Timeout" functions to write animated text instructions and a short delay between moves.
- More practice with simple CSS animations

### Screenshot

![Battleship app screenshot](/dist/images/battleship.png)
