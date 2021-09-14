/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "hug",
	description: "hugs!",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		message.reply("*hugs you*");
	}
});
