const { readdirSync } = require('fs');

module.exports = (client) => {
	readdirSync('./commands/').forEach(dir => {
		const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));

		commands.forEach((file) => {
			const pull = require(`../commands/${dir}/${file}`);
			client.commands.set(pull.name, pull);

			pull.aliases.forEach(alias => {
				client.aliases.set(alias, pull.name);
			});
		});
	});
	console.log('Loading commands...');
	console.log(`Successfully loaded ${client.commands.size} commands!`);
};