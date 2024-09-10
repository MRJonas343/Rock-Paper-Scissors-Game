# Rock-Paper-Scissors Game with HMAC

This is a command-line version of the classic **Rock-Paper-Scissors** game, enhanced with HMAC (Hash-based Message Authentication Code) for added security. In this game, a computer generates a move and a corresponding HMAC key for verification, ensuring fairness by allowing players to verify the computer's move after the round ends.

## Features

- **Fair play**: Each round starts with a generated HMAC to prove the computer’s move was not altered.
- **Support for multiple moves**: The game allows you to play with more than just the classic rock, paper, and scissors.
- **Customizable rules**: You can define your own moves and rules by passing the options as command-line arguments.
- **Help table**: The game provides a helpful table explaining how each move compares with the others.
- **HMAC verification**: Each round provides a cryptographic proof that the computer's choice was fixed before the player made their move.

## How it Works

1. The computer generates a random move from the list of available moves.
2. A secret key is generated, and an HMAC is created from the computer's move.
3. The player chooses a move, and the outcome is determined (win, lose, or draw).
4. After the game round, the HMAC key is revealed, allowing the player to verify that the computer's move was not altered.

## Requirements

- **Node.js** version 14.x or higher.
- **npm** (comes with Node.js).

By Jonas Rosales (Craziest Dev)