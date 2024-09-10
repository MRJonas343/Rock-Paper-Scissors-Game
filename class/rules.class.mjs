export class Rules {
	constructor(moves) {
		this.moves = moves;
		this.numMoves = moves.length;
	}

	determineOutcome(playerMove, computerMove) {
		if (playerMove === computerMove) return "Draw";

		const half = Math.floor(this.numMoves / 2);
		const playerIndex = this.moves.indexOf(playerMove);
		const computerIndex = this.moves.indexOf(computerMove);

		if (
			(computerIndex > playerIndex && computerIndex <= playerIndex + half) ||
			(computerIndex < playerIndex &&
				computerIndex + this.numMoves <= playerIndex + half)
		) {
			return "Lose";
		}
		return "Win";
	}
}
