const { MessageEmbed } = require('discord.js');
const { capitalizeFirstLetter } = require('../../functions');
const { BOT_OWNER } = process.env;

module.exports = {
	name: 'help',
	aliases: ['commands'],
	category: 'Info',
	description: 'Returns the help page, or one specific command info.',
	usage: 'help [command/category]',
	userperms: [],
	botperms: [],
	run: async (client, message, args, prefix) => {
		if (args.join(' ')) {
			const cmd = client.commands.get(args.join(' ').toLowerCase()) || client.commands.get(client.aliases.get(args.join(' ').toLowerCase()));
			if (cmd.category.toLowerCase() === 'owner' && message.author.id !== BOT_OWNER) return;
			const hembed = new MessageEmbed()
				.setTitle(`Information for ${cmd.name.toString().toLowerCase()} command`)
				.setColor('BLUE')
				.setTimestamp()
				.setFooter('Syntax: <> = required, [] = optional', `${client.user.avatarURL()}`)
				.setDescription([
					`> **Name: \`${cmd.name}\`**`,
					`> **Category: \`${cmd.category.toString()}\`**`,
					`> **Description: \`${capitalizeFirstLetter(cmd.description)}\`**`,
					`> **Usage: \`${prefix}${cmd.usage}\`**`,
					`> **Aliases: \`${cmd.aliases.length ? cmd.aliases.map((a) => `${a}`).join('`, `') : 'None'}\`**`,
				]);
			return message.channel.send(hembed);
		}
		else {
			const embed = new MessageEmbed()
				.setTitle(`${client.user.username}'s Commands`)
				.setFooter(`${client.user.username}'s Help`, `${client.user.avatarURL()}`)
				.setTimestamp()
				.setColor('BLUE')
				.setDescription([`
				This server's prefix is \`${prefix}\`.
				For more info on a specific command, type \`${prefix}help <command>\`.
				`]);

			let categories;
			if(message.author.id !== BOT_OWNER) {
				categories = [...new Set(client.commands.filter(cmd => cmd.category !== 'Owner').map(cmd => cmd.category))];
			}
			else{
				categories = [...new Set(client.commands.map(cmd => cmd.category))];
			}

			for (const id of categories) {
				const category = client.commands.filter(cmd => cmd.category === id);

				embed.addField(`${id} (${category.size})`, category.map(cmd => `\`${cmd.name}\``).join(' '));
			}
			return message.channel.send(embed);
		}
	},
};