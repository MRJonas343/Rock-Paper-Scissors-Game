import { Game } from "./class/game.class.mjs";
import { handleError } from "./helpers/handleError.mjs";

const args = process.argv.slice(2);

if (args.length < 3) {
	handleError(
		"You must provide at least three moves. Example: node index.mjs rock paper scissors",
	);
}

if (args.length % 2 === 0) {
	handleError(
		"You must provide an odd number of moves. Example: node index.mjs rock paper scissors",
	);
}

const hasDuplicates = new Set(args).size !== args.length;

if (hasDuplicates) {
	handleError(
		"Moves must be unique. Example: node index.mjs rock paper scissors",
	);
}

const game = new Game(args);

game.start();
