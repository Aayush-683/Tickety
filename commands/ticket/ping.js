/* eslint-disable no-unused-vars */
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'ping',
	category: 'Info',
	description: 'Returns the bot\'s latency and API ping.',
	aliases: ['latency'],
	usage: 'ping',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
		message.channel.send('🏓 Pinging....').then((msg) => {
			const pEmbed = new MessageEmbed()
				.setTitle('🏓 Pong!')
				.setColor('BLUE')
				.setDescription(
					`Latency: ${Math.floor(
						msg.createdTimestamp - message.createdTimestamp,
					)}ms\nAPI Latency: ${client.ws.ping}ms`,
				);
			msg.edit(pEmbed);
		});
	},
};