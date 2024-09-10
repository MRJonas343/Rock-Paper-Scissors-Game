import { KeyGenerator } from "./keyGenerator.class.mjs";
import { TableGenerator } from "./tableGenerator.class.mjs";
import { Rules } from "./rules.class.mjs";
import readline from "node:readline";
import { createMenu } from "./createMenu.class.mjs";

export class Game {
	constructor(moves) {
		this.moves = moves;
		this.rules = new Rules(moves);
	}

	start() {
		const key = KeyGenerator.generateKey();
		const computerMove =
			this.moves[Math.floor(Math.random() * this.moves.length)];
		const hmac = KeyGenerator.generateHMAC(key, computerMove);

		const menu = new createMenu(this.moves, hmac);

		menu.printMenu();

		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		rl.question("Enter your move: ", (input) => {
			if (input === "0") {
				return rl.close();
			}
			if (input === "?") {
				TableGenerator.generateHelpTable(this.moves);
				return rl.close();
			}

			const playerMoveIndex = Number(input) - 1;
			if (playerMoveIndex < 0 || playerMoveIndex >= this.moves.length) {
				console.log("Invalid move. Try again.");
				return rl.close();
			}

			const playerMove = this.moves[playerMoveIndex];
			console.log("Your move:", playerMove);
			console.log("Computer move:", computerMove);

			const result = this.rules.determineOutcome(playerMove, computerMove);
			console.log(
				result === "Win"
					? "You win!"
					: result === "Lose"
						? "You lose!"
						: "Draw",
			);

			console.log("HMAC key:", key);
			rl.close();
		});
	}
}
