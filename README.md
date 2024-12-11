# Tic-Tac-Toe Game

A fun and interactive Tic-Tac-Toe game built using HTML, CSS, and JavaScript. Challenge a friend in this classic two-player game and see who emerges victorious!

## Features

- **Two-Player Mode:** Play as "X" or "O" against a friend.
- **Dynamic UI:** Game board updates in real-time based on player moves.
- **Winner Detection:** Highlights the winner based on the winning patterns.
- **Reset Game:** Reset the board to play again.
- **Responsive Design:** Play seamlessly on desktop and mobile devices.

## How to Play

1. Clone this repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <repository-name>
   ```

3. Open the `index.html` file in your browser.

4. Players take turns clicking on the grid to place their mark ("X" or "O").

5. The first player to align three marks horizontally, vertically, or diagonally wins.

6. Click the **Reset** button to start a new game.

## Code Overview

The game logic is implemented in `script.js` with the following key components:

- **Game Board:** Represented as a grid of clickable boxes.
- **Player Turn Management:** Alternates between "X" and "O" for each turn.
- **Winning Patterns:** Predefined patterns are used to check for a winner.
- **Game Reset:** Clears the board and enables all boxes for a new game.

### Key Functions

- **Resetgame():** Resets the game state and enables all boxes.
- **disabledboxes():** Disables all boxes to prevent further input after a winner is determined.
- **enabledboxes():** Clears and re-enables all boxes for a new game.
- **checkwinner():** Checks for a winning pattern and displays the winner.
- **showwinner(winner):** Displays the winner and disables further input.

### Event Handling

- Each box listens for a click event to record the player's move.
- Buttons for "Reset" and "New Game" trigger the reset functionality.

## Contributing

Contributions are welcome! Feel free to fork the repository, make changes, and submit a pull request. Suggestions for enhancements or additional features are appreciated.

##
