/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "embed",
	description: "Shows an embed",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		embed
			.setTitle("This is a test embed")
			.setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
			.setAuthor(
				message.author.username,
				message.author.avatarURL({ dynamic: true }),
				"https://www.youtube.com/watch?v=dQw4w9WgXcQ"
			)
			.setDescription(
				"this is some plain text,\nhere is a link: [this is a test link](https://www.youtube.com/watch?v=dQw4w9WgXcQ)"
			)
			.setColor("BLURPLE")
			.setThumbnail(message.author.avatarURL({ dynamic: true }))
			.setTimestamp()
			.setImage(
				"https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png"
			)
			.addFields(
				{
					name: "Bot Version",
					value: "1.0.0",
					inline: true
				},
				{
					name: "Bot Name",
					value: client.user.username,
					inline: true
				}
			);

		message.reply({ embeds: [embed] });
	}
});
