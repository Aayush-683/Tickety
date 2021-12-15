const {
  SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('botinfo')
    .setDescription('Gives the credits of the bot.'),
  async execute(interaction, client) {
    const embed = new client.discord.MessageEmbed()
      .setColor('6d6ee8')
      .setDescription('Developed with the 💜 by `•OofyOofOof•#2018`\n\n[`Github`](https://github.com/blackknight683) | [`Twitch`](https://www.twitch.tv/oofydaoofer) | [`Discord`](https://discord.gg/S2GGa23) | [`Youtube`](https://youtube.com/c/BlackKnight683)')
      .setFooter(client.user.tag, client.user.avatarURL())
      .setTimestamp();
    await interaction.reply({
      embeds: [embed]
    });
  },
};