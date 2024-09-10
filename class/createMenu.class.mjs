export class createMenu {
	constructor(moves, hmac) {
		this.moves = moves;
		this.hmac = hmac;
	}

	printMenu() {
		console.log("HMAC:", this.hmac);
		console.log("Available moves:");
		this.moves.forEach((move, index) => {
			console.log(`${index + 1} - ${move}`);
		});
		console.log("0 - Exit");
		console.log("? - Help");
	}
}
