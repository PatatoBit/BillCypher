/** @format */
const { MessageActionRow, MessageButton } = require('discord.js');

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "gacha",
	description: "Show a gacha embed",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {

		const embed = new Discord.MessageEmbed();

		embed
			.setTitle("Gacha Test")
			.setDescription(
				"Pick one of the 4 Colors"
			)
			.setColor("BLURPLE")
			.setThumbnail(message.author.avatarURL({ dynamic: true }))
			.setTimestamp()
            

		message.reply({ embeds: [embed] });
	}
});
