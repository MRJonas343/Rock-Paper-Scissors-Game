import crypto from "node:crypto";

export class KeyGenerator {
	static generateKey() {
		return crypto.randomBytes(32).toString("hex");
	}

	static generateHMAC(key, message) {
		return crypto.createHmac("sha256", key).update(message).digest("hex");
	}
}
