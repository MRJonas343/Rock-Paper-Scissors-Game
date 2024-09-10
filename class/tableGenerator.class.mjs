import { Rules } from "./rules.class.mjs";

export class TableGenerator {
	static generateHelpTable(moves) {
		const rules = new Rules(moves);
		const table = {};

		moves.forEach((move, i) => {
			table[move] = {};

			moves.forEach((opponentMove, j) => {
				if (i === j) {
					table[move][opponentMove] = "Draw";
				} else {
					const outcome = rules.determineOutcome(move, opponentMove);
					table[move][opponentMove] = outcome;
				}
			});
		});

		console.table(table);
	}
}
